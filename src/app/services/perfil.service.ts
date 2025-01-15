import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComunService} from "./comun.service";
import {Perfil} from "../modelos/Perfil";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private perfilAllUrl = '/perfil/all';
  private perfilBuscarUrl = '/perfil/buscar';
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private comunService:ComunService) {}

  // Método para obtener los perfiles
  getPerfiles(): Observable<Perfil[]> {
    const options = this.comunService.autorizarPeticion();
    return this.http.get<any>(`${this.apiUrl+this.perfilAllUrl}`, options);
  }


  buscar(busqueda:string): Observable<Perfil[]> {
    const options = this.comunService.autorizarPeticion();
    return this.http.get<any>(`${this.apiUrl+this.perfilBuscarUrl}?busqueda=${busqueda}`, options);
  }
}
