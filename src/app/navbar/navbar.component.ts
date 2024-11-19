import {Component, OnInit} from '@angular/core';
import {addIcons} from "ionicons";
import {briefcaseOutline, bulbOutline, gridOutline, menuOutline, peopleOutline} from "ionicons/icons";
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
    addIcons({menuOutline, gridOutline, briefcaseOutline, peopleOutline,bulbOutline})
  }

  ngOnInit() {}

}
