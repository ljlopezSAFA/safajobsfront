import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-buscador-perfiles',
  templateUrl: './buscador-perfiles.component.html',
  styleUrls: ['./buscador-perfiles.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class BuscadorPerfilesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
