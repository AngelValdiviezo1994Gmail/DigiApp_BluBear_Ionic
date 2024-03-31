/*
  getDigimonsById(String id) async {
    try{
      final baseURL = '$endPointDetalle/digimon/$id';

      final varResponse = await http.get(Uri.parse(baseURL));
      if(varResponse.statusCode != 200) return null;

      final prospRsp = DigimonDetalleModel.fromJson(varResponse.body);
      return prospRsp;
    }
    on SocketException catch (_) {
      Fluttertoast.showToast(
        msg: digiMensajesProspectoService.mensajeFallaInternet,
        toastLength: Toast.LENGTH_LONG,
        gravity: ToastGravity.TOP,
        timeInSecForIosWeb: 5,
        backgroundColor: Colors.red,
        textColor: Colors.white,
        fontSize: 16.0
      );
          
    }
  }
*/

import { Injectable } from '@angular/core';
import { DigiLista, Content } from '../models/models';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class DigiServicesService {

  //private apiUrl = 'https://digi-api.com/api/v1/digimon?pageSize=20';

  constructor(private http: HttpClient) { }

  
  private ejecutarQuery<T>( query: string ) {

    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );

  }

  public obtenerLista(): Observable<any> {
    //return this.ejecutarQuery<any>(`/digimon?pageSize=20`).pipe(
    return this.http.get<any[]>('https://digi-api.com/api/v1/digimon?pageSize=20').pipe(
      map(
        response => {
          return response;
        }
      )
    );
  }

  public getDigimonsById(id: string): Observable<any> {
    return this.http.get<any>(`https://digi-api.com/api/v1/digimon/${id}`);   
  }

}
