import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {
  IonButtons,
  IonContent,
  IonHeader, IonImg, IonItem,
  IonList,
  IonMenu,
  IonMenuButton, IonRouterOutlet, IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonRouterOutlet,
    IonTitle,
    IonImg
  ]
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
