import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf
  ]
})
export class JobsComponent  implements OnInit {
  isContentVisible = false;

  constructor() { }

  ngOnInit() {}




  mostrarContenido() {
    this.isContentVisible = !this.isContentVisible;
  }

}
