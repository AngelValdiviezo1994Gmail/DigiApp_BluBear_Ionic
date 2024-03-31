import { Component, OnInit } from '@angular/core';
import { DigiServicesService } from '../../services/digi_service';
import { DigiLista, Content } from '../../models/models';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  data: Content[] = [];

  constructor(private dataService: DigiServicesService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.dataService.obtenerLista()
        .subscribe( 
          resp => {
          this.data = resp.content;
        }
      );
  }

  async openModal(idObj: Content) {
    console.log('Test: ', idObj.id);
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        datos: idObj.id
      }
    });
    return await modal.present();
  }

}
