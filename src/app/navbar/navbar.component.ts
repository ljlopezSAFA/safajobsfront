import {Component, OnInit} from '@angular/core';
import {
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {gridOutline, logoIonic, menuOutline} from "ionicons/icons";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class NavbarComponent  implements OnInit {

  constructor() {
    addIcons({menuOutline, gridOutline})
  }

  ngOnInit() {}

}
