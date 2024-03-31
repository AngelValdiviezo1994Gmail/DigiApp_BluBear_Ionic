import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    private router: Router
  ) {
    this.nombres = '';
    this.correo = '';
    this.contrasenia = '';
  }

  async create() {
    this.router.navigateByUrl('/inicio');
  }

  editTask(index : number) {
    this.navCtrl.navigateForward(`/edit-task/${index}`);
  }
}
