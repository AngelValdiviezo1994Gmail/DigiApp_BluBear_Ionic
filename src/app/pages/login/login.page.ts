import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';
import { AutenticacionService } from '../../services/services';
import { Router } from '@angular/router';
import { ClientTypeResponseModel } from 'src/app/models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  email: string = "";
  password: string = "";
  oClientTypeResponseModel: ClientTypeResponseModel;

  constructor(
    private navController: NavController,
    private modalCtrl: ModalController,
    private router: Router,
    public alertController: AlertController,
    private dataService: AutenticacionService,
  ) {
    this.oClientTypeResponseModel = new ClientTypeResponseModel('','');
  }

  async login() {
    if(this.email != null && this.email != '' &&
    this.password != null && this.password != '') {

      await this.dataService.autenticacion(this.email, this.password)
        .subscribe( 
          resp => {
            this.oClientTypeResponseModel = resp;
        }
      );

      if(this.oClientTypeResponseModel.token != null && this.oClientTypeResponseModel.token != '') {
        this.router.navigateByUrl('/inicio');
      } else {
        this.presentAlert('Usuario inválido');
      }
      
    } else {
      this.presentAlert('Ingrese información');
    }
    
  }

  async registrarse() {
    this.router.navigateByUrl('/usuario');
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
