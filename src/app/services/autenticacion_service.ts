
import { Injectable } from '@angular/core';
import { DigiLista, Content } from '../models/models';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiLogin = environment.apiLogin;

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  constructor(private http: HttpClient) { }

  public autenticacion(emailEntra: string, password: string): Observable<any> {
    
    return this.http.post<any>(`${apiLogin}usuarios/autenticar/${emailEntra}/${password}`,null);   
  }

  
  public validarCorreo(correo: string): boolean {
    // Expresión regular para validar un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }


}
