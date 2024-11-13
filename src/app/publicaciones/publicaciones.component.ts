import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {eye} from "ionicons/icons";
import {Publicacion} from "../modelos/Publicacion";
import {PublicacionService} from "../services/publicacion.service";
import {CommonModule, NgForOf} from "@angular/common";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import {PublicacionCrear} from "../modelos/PublicacionCrear";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class PublicacionesComponent implements OnInit {


  publicaciones: Publicacion[] = [];
  publicacionNueva: PublicacionCrear = new PublicacionCrear();
  mostrarModal: boolean = false;


  constructor(private publicacionService: PublicacionService) {
    addIcons({eye})
  }

  ngOnInit() {
    this.cargarPublicaciones();
  }

  guardarPublicacion(): void {
    this.publicacionService.guardar(this.publicacionNueva).subscribe({
      next: (data) => {
        console.info(data);
        this.cargarPublicaciones();
      },
      error: (error) => console.error('Error:', error),
      complete: () => {
        console.log('Petición completada');
        this.mostrarModal = false;
      }

    });
  }

  cargarPublicaciones(): void {
    this.publicacionService.getPublicaciones().subscribe({
      next: (data) => {
        this.publicaciones = data;
        console.info(data)
      },
      error: (error) => console.error('Error:', error),
      complete: () => {
        console.log('Petición completada');
      }
    });
  }


  lanzardialogo() :void{
    this.mostrarModal = true;
    this.publicacionNueva = new PublicacionCrear();
  }

}
