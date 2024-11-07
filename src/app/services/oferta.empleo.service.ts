import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComunService} from "./comun.service";
import {Perfil} from "../modelos/Perfil";
import {OfertaEmpleo} from "../modelos/OfertaEmpleo";

@Injectable({
  providedIn: 'root'
})
export class OfertaEmpleoService {

  private ofertaEmpleoAllUrl = '/api/ofertas-empleo/all';


  constructor(private http: HttpClient, private comunService:ComunService) {}

  // Método para obtener los perfiles
  getOfertas(): Observable<OfertaEmpleo[]> {
    const options = this.comunService.autorizarPeticion();
    return this.http.get<any>(`${this.ofertaEmpleoAllUrl}`, options);
  }


}
