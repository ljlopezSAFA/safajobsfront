import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {homeOutline, personOutline, chatbubblesOutline} from "ionicons/icons";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-menu-inferior',
  templateUrl: './menu-inferior.component.html',
  styleUrls: ['./menu-inferior.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class MenuInferiorComponent  implements OnInit {

  constructor() {
    addIcons({homeOutline, personOutline, chatbubblesOutline})
  }

  ngOnInit() {}

}
