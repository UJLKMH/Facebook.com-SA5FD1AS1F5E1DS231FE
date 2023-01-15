import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  endPoint: string = 'https://facebooks.herokuapp.com/api/crear'

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.endPoint, usuario);
    
  }


}
