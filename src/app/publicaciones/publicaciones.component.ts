import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {eye} from "ionicons/icons";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class PublicacionesComponent  implements OnInit {

  constructor() {
    addIcons({eye})
  }

  ngOnInit() {}

}
