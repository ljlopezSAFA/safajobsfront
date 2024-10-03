import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {paperPlaneOutline} from "ionicons/icons";

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class PersonalChatComponent  implements OnInit {

  constructor() {

    addIcons({paperPlaneOutline})
  }

  ngOnInit() {}

}
