import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aptitud} from "../modelos/Aptitud";

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {

  constructor(private httpClient: HttpClient) { }


  getAptitudes(): Observable<Aptitud[]>{
    return this.httpClient.get<any>("/api/aptitud/all");
  }





}
