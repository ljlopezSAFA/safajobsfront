import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {eye} from "ionicons/icons";
import {Publicacion} from "../modelos/Publicacion";
import {PublicacionService} from "../services/publicacion.service";
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class PublicacionesComponent  implements OnInit {


  publicaciones: Publicacion[] = [];


  constructor(private publicacionService: PublicacionService) {
    addIcons({eye})
  }

  ngOnInit() {

    this.publicacionService.getPublicaciones().subscribe({
      next: (data) => {
        this.publicaciones = data;
        console.info(data)
      },
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Petición completada')
    });

  }

}
