import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
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
    private router: Router
  ) {
  }

  async login() {
    this.router.navigateByUrl('/inicio');
  }

  async registrarse() {
    this.router.navigateByUrl('/usuario');
  }

}
