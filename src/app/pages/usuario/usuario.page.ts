import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DigiServicesService } from '../../services/digi_service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/services';
import { ProspectoTypeResponseModel, ProspectoTypeModel } from 'src/app/models/models';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage{

  public oProspectoTypeResponseModel: ProspectoTypeResponseModel;
  public oProspectoTypeModel: ProspectoTypeModel;
  public nombres: string;
  public correo: string;
  public contrasenia: string;

  constructor(
    private tasksService: DigiServicesService, private navCtrl: NavController,
    private router: Router,
    public alertController: AlertController,
    private dataService: UsuarioService,
  ) {
    this.nombres = '';
    this.correo = '';
    this.contrasenia = '';
    this.oProspectoTypeModel = new ProspectoTypeModel('','','','',
    '','','','', '',
    '','','', '', '',
     0,0, '', new Date(), '', '', '');
    /*
    _id: string, _tipoIdentificacion: string, _identificacion: string, _nombres: string,
        _apellidos: string, _alias: string, _celular: string, _grupoEmpresarial: string, _codigoEmpresa: string,
        _area: string, _departamento: string, _fechaNacimiento: string, _genero: string, _direccion: string,
        _latitud: number, _longitud: number, _email: string, _fechaNacDate: Date, _password: string, _tipoCliente: string,
        _autorizadoPor: string
    */
    //_succeeded: boolean, _message: string, _statusCode: string, _data: ProspectoTypeModel
    this.oProspectoTypeResponseModel = new ProspectoTypeResponseModel(true,'','',this.oProspectoTypeModel);
  }

  async create() {
    if(this.nombres != '' && this.nombres != null && 
    this.correo != '' && this.correo != null &&
    this.contrasenia != '' && this.contrasenia != null) {
      
      let correoValido = this.dataService.validarCorreo(this.correo);

      if(!correoValido){
        this.presentAlert('Correo inválido');
        return;
      }
      
      await this.dataService.registraUsuario(this.correo, this.contrasenia, this.nombres)
        .subscribe( 
          resp => {
            this.oProspectoTypeResponseModel = resp;
        }
      );

      if(this.oProspectoTypeResponseModel.succeeded != null && this.oProspectoTypeResponseModel.succeeded) {
        this.presentAlert('Usuario registrado correctamente');
        this.router.navigateByUrl('/inicio');
      } else {
        this.presentAlert('Error al registrar sus datos');
      }
      
    } else {
      this.presentAlert('Ingrese información');
    }
    
  }

  editTask(index : number) {
    this.navCtrl.navigateForward(`/edit-task/${index}`);
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      //subHeader: 'Este es un subtítulo',
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
