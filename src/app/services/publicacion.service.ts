import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Publicacion} from "../modelos/Publicacion";
import {Observable} from "rxjs";
import {PublicacionCrear} from "../modelos/PublicacionCrear";

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private httpClient: HttpClient) {}


  getPublicaciones(): Observable<Publicacion[]>{
    return this.httpClient.get<any>('/api/publicacion/all') ;
  }


  guardar(publicacionNueva: PublicacionCrear): Observable<any>{
    publicacionNueva.id_perfil =3;
    return this.httpClient.post<any>('/api/publicacion',publicacionNueva) ;
  }




}
