/*
import { Injectable } from '@angular/core';
import { DigiLista } from '../models/models';
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

  digiLista: DigiLista = {
    content : []
  };

  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {

    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );

  }

  public obtenerLista() {
    return this.ejecutarQuery<DigiLista>(`/digimon?pageSize=20`);
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

  //getProductos(): Observable<Producto[]> {
    
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
}
