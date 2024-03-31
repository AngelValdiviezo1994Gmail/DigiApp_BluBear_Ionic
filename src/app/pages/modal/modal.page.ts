import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DigiServicesService } from 'src/app/services/digi_service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  data: any;
  @Input() datos: any;


  constructor(private dataService: DigiServicesService, public modalController: ModalController) { }

  ngOnInit() {
    this.getDetalleById(this.datos);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  getDetalleById(id: string) {

    this.dataService.getDigimonsById(id)
        .subscribe( 
          resp => {
          this.data = resp;
        }
      );
  }

}
