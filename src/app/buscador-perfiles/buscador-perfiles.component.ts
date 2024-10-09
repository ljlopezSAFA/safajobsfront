import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {PerfilService} from "../services/perfil.service";
import {CommonModule} from "@angular/common";
import {Perfil} from "../modelos/Perfil";

// @ts-ignore
@Component({
  selector: 'app-buscador-perfiles',
  templateUrl: './buscador-perfiles.component.html',
  styleUrls: ['./buscador-perfiles.component.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule
  ]
})
export class BuscadorPerfilesComponent implements OnInit {

  perfiles: Perfil[] = [];

  constructor(private perfilService: PerfilService) {
  }

  ngOnInit() {
    this.cargarTodosPerfiles();
  }


  buscarPerfiles(event: any): void {
    const busqueda = event.target.value.toLowerCase();
    this.perfilService.buscar(busqueda).subscribe({
        next: (d) => {
          this.perfiles = d;
        },
        error: (e) => {
          console.error(e);
        },
        complete: () =>
          console.info(this.perfiles)

      }
    );

  }


  cargarTodosPerfiles(): void {
    this.perfilService.getPerfiles().subscribe({
        next: (d) => {
          this.perfiles = d;
        },
        error: (e) => {
          console.error(e);
        },
        complete: () =>
          console.info(this.perfiles)

      }
    );
  }


}
