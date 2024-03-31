import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  email: string = "";
  password: string = "";

  constructor(
    private navController: NavController,
    private modalCtrl: ModalController,
    private router: Router,
    public alertController: AlertController
  ) {
  }

  async login() {
    if(this.email != null && this.email != '' &&
    this.password != null && this.password != '') {
      this.router.navigateByUrl('/inicio');
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
