import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {OfertaEmpleoService} from "../services/oferta.empleo.service";
import {OfertaEmpleo} from "../modelos/OfertaEmpleo";
import {addIcons} from "ionicons";
import {clipboard, clipboardOutline, eye, eyeOutline, peopleOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterLink
  ]
})
export class JobsComponent implements OnInit {

  ofertasEmpleo: OfertaEmpleo[] = []


  constructor(private ofertaEmpleoService: OfertaEmpleoService) {
    addIcons({eyeOutline, clipboardOutline, peopleOutline})
  }


  ngOnInit() {
    this.getOfertasEmpleo();
  }






  getOfertasEmpleo():void {
    this.ofertaEmpleoService.getOfertas().subscribe({

      next: (data) => {
        this.ofertasEmpleo = data;
        console.info(data);
      },
      error:(error) => console.error(error),
      complete: () => console.info("Petición Enviada")
    })


  }



  visibilidad(oferta:OfertaEmpleo): void {
    oferta.visibilidad = ! oferta.visibilidad;
  }


  inscribirseAOferta(idOferta: any): void{
    console.log(idOferta);
    this.ofertaEmpleoService.inscribirseAOferta(idOferta).subscribe({
      next:(a)=> console.log("Enviado"),
      error:(error) => console.error(error),
      complete: () => console.info("Petición Enviada")
    });

  }


}
