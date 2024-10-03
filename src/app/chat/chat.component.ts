import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {paperPlaneOutline} from "ionicons/icons";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [
    IonicModule,RouterModule
  ]
})
export class ChatComponent  implements OnInit {

  constructor() {
    addIcons({paperPlaneOutline})
  }

  ngOnInit() {}

}
