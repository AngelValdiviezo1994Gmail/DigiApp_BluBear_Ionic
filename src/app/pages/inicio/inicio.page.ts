import { Component, OnInit } from '@angular/core';
import { DigiServicesService } from '../../services/digi_service';
import { DigiLista, Content } from '../../models/models';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  data: Content[] = [];

  constructor(private dataService: DigiServicesService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    /*
    this.dataService.obtenerLista().subscribe(
      (response) => {
        console.log(response);
        //this.data = response; // Asigna los datos a la variable de clase
      },
      (error) => {
        console.log('Error: ', error);
        console.error('Error al cargar los datos:', error);
      }
    );
*/

    this.dataService.obtenerLista()
        .subscribe( 
          resp => {
          console.log('Test: ' ,resp );
          console.log('Test 2: ' ,resp.content[1] );
          this.data = resp.content;

        }
      );
  } 

}
