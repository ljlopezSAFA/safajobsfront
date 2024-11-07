import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule, NgIf} from "@angular/common";
import {OfertaEmpleoService} from "../services/oferta.empleo.service";
import {OfertaEmpleo} from "../modelos/OfertaEmpleo";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class JobsComponent implements OnInit {

  ofertasEmpleo: OfertaEmpleo[] = []


  constructor(private ofertaEmpleoService: OfertaEmpleoService) {
  }

  ngOnInit() {
    this.obtenerOfertasEmpleo();
  }


  obtenerOfertasEmpleo(): void {
    this.ofertaEmpleoService.getOfertas().subscribe({
      next: (ofertas) => {
        this.ofertasEmpleo = ofertas;
        console.info(ofertas);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
      }
    })
  }


  visibilidad(oferta:OfertaEmpleo): void {
    oferta.visibilidad = ! oferta.visibilidad;
  }


}
