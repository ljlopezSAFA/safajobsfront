import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aptitud} from "../modelos/Aptitud";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  getAptitudes(): Observable<Aptitud[]>{
    return this.httpClient.get<any>(`${this.apiUrl}/aptitud/all`);
  }





}
