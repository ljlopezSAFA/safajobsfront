import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComunService} from "./comun.service";
import {Perfil} from "../modelos/Perfil";
import {OfertaEmpleo} from "../modelos/OfertaEmpleo";
import {InscripcionOferta} from "../modelos/InscripcionOferta";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OfertaEmpleoService {

  private ofertaEmpleoAllUrl = '/ofertas-empleo/all';
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private comunService:ComunService) {}

  // Método para obtener los perfiles
  getOfertas(): Observable<OfertaEmpleo[]> {
    return this.http.get<any>(`${this.apiUrl+this.ofertaEmpleoAllUrl}`);
  }


  inscribirseAOferta(idOferta: any):Observable<any> {
    let inscripcionOferta =  new InscripcionOferta(idOferta, 1);
    return this.http.post(`${this.apiUrl+this.ofertaEmpleoAllUrl}/ofertas-empleo/inscribirse`, inscripcionOferta)
  }




}
