import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonLabel,
  IonItemOption
} from '@ionic/angular/standalone';
import {NavbarComponent} from "../navbar/navbar.component";
import {PublicacionesComponent} from "../publicaciones/publicaciones.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar,
    IonTitle, IonContent, IonCard,
    IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonList,
    IonItemSliding, IonItem, IonItemOptions,
    IonLabel, IonItemOption, NavbarComponent, PublicacionesComponent],
})
export class HomePage {
  constructor() {}
}
