import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Publicacion} from "../modelos/Publicacion";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private httpClient: HttpClient) {}


  getPublicaciones(): Observable<Publicacion[]>{
    return this.httpClient.get<any>('/api/publicacion/all') ;

  }





}
