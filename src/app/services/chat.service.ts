import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ComunService} from "./comun.service";
import {Perfil} from "../modelos/Perfil";
import {environment} from "../../environments/environment";
import {Chat} from "../modelos/Chat";
import {Mensaje} from "../modelos/Mensaje";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private urlChats  = '/mensaje/chats';
  private urlMensajeEnviar  = '/mensaje/enviar';
  private urlMensajesChatPrivado  = '/mensaje/chat/';
  private apiUrl = environment.apiUrl;
  private contactoObservable = new BehaviorSubject<number>(0);
  contacto = this.contactoObservable.asObservable();

  setContactoId(id: number) {
    sessionStorage.setItem('contacto', String(id));
    this.contactoObservable.next(id);

  }

  getContactoId(): number  {
    if(this.contactoObservable.value ===null){
      return Number(sessionStorage.getItem('contacto'));
    }
    return this.contactoObservable.value;
  }

  constructor(private http: HttpClient, private comunService:ComunService) {}

  // Método para obtener los perfiles
  getChats(): Observable<Chat[]> {
    const options = this.comunService.autorizarPeticion();
    return this.http.get<any>(`${this.apiUrl+this.urlChats}`, options);
  }

  cargarMensajesChat(idPerfil: number | null): Observable<Mensaje[]> {
    const options = this.comunService.autorizarPeticion();
    return this.http.get<any>(`${this.apiUrl+this.urlMensajesChatPrivado}`+idPerfil, options);
  }

  enviarMensaje(mensaje:Mensaje){
    const options = this.comunService.autorizarPeticion();
    return this.http.post<any>(`${this.apiUrl+this.urlMensajeEnviar}`,mensaje ,options );
  }



}
