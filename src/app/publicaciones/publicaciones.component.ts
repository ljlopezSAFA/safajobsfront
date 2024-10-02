import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

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

  constructor() { }

  ngOnInit() {}

}
