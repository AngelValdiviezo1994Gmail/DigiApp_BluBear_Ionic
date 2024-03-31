import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DigiServicesService } from '../../services/digi_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage{

  
  public nombres: string;
  public correo: string;
  public contrasenia: string;

  constructor(
    private tasksService: DigiServicesService, private navCtrl: NavController,
    private router: Router,
    public alertController: AlertController
  ) {
    this.nombres = '';
    this.correo = '';
    this.contrasenia = '';
  }

  async create() {
    if(this.nombres != '' && this.nombres != null && 
    this.contrasenia != '' && this.contrasenia != null &&
    this.contrasenia != '' && this.contrasenia != null) {
      this.router.navigateByUrl('/inicio');
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
