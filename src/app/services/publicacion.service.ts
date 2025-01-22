import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Publicacion} from "../modelos/Publicacion";
import {Observable} from "rxjs";
import {PublicacionCrear} from "../modelos/PublicacionCrear";
import {environment} from "../../environments/environment";
import {ComunService} from "./comun.service";
import {options} from "ionicons/icons";

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private comunService:ComunService) {}


  getPublicaciones(): Observable<Publicacion[]>{
    const authHeader = this.comunService.autorizarPeticion()
    return this.httpClient.get<any>(`${this.apiUrl}/publicacion/all/me`, authHeader) ;
  }


  guardar(publicacionNueva: PublicacionCrear): Observable<any>{
    publicacionNueva.id_perfil =3;
    return this.httpClient.post<any>(`${this.apiUrl}/publicacion`,publicacionNueva) ;
  }




}
