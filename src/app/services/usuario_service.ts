
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

export class UsuarioService {

  constructor(private http: HttpClient) { }

  public registraUsuario(emailEntra: string, password: string, nombres: string): Observable<any> {
    
    return this.http.post<any>(`${apiLogin}usuarios/crear-cuenta-url/${emailEntra}/${nombres}/${password}`,null);   
  }

  public validarCorreo(correo: string): boolean {
    // Expresión regular para validar un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

/*
registraProspecto(String nombre, String correo, String clave) async {
    final baseURL = '${endPoint}usuarios/crear-cuenta-url/$correo/$nombre/$clave';

    final response = await http.post(Uri.parse(baseURL));
    if(response.statusCode != 200) return null;

    var reponseRs = response.body;
    final clienteRsp = ClientTypeResponse.fromJson(reponseRs);
    
    if(clienteRsp.mensaje.isEmpty) {
      return null;
    }

    notifyListeners();
  }

*/

}
