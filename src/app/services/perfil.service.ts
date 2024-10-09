import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComunService} from "./comun.service";
import {Perfil} from "../modelos/Perfil";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private perfilAllUrl = '/api/perfil/all';
  private perfilBuscarUrl = '/api/perfil/buscar';

  constructor(private http: HttpClient, private comunService:ComunService) {}

  // Método para obtener los perfiles
  getPerfiles(): Observable<Perfil[]> {
    const options = this.comunService.autorizarPeticion();
    return this.http.get<any>(`${this.perfilAllUrl}`, options);
  }


  buscar(busqueda:string): Observable<Perfil[]> {
    const options = this.comunService.autorizarPeticion();
    return this.http.get<any>(`${this.perfilBuscarUrl}?busqueda=${busqueda}`, options);
  }
}
