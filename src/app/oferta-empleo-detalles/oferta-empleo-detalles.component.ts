import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta-empleo-detalles',
  templateUrl: './oferta-empleo-detalles.component.html',
  styleUrls: ['./oferta-empleo-detalles.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class OfertaEmpleoDetallesComponent  implements OnInit {

   idOfertaEmpleo!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.idOfertaEmpleo = Number(this.route.snapshot.paramMap.get('id'));

  }

}
