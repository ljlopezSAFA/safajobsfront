import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComunService} from "./comun.service";
import {Perfil} from "../modelos/Perfil";
import {OfertaEmpleo} from "../modelos/OfertaEmpleo";
import {InscripcionOferta} from "../modelos/InscripcionOferta";

@Injectable({
  providedIn: 'root'
})
export class OfertaEmpleoService {

  private ofertaEmpleoAllUrl = '/api/ofertas-empleo/all';


  constructor(private http: HttpClient, private comunService:ComunService) {}

  // Método para obtener los perfiles
  getOfertas(): Observable<OfertaEmpleo[]> {
    return this.http.get<any>(`${this.ofertaEmpleoAllUrl}`);
  }


  inscribirseAOferta(idOferta: any):Observable<any> {
    let inscripcionOferta =  new InscripcionOferta(idOferta, 1);
    return this.http.post('/api/ofertas-empleo/inscribirse', inscripcionOferta)
  }




}
