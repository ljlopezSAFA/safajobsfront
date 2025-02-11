import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {PerfilService} from "../services/perfil.service";
import {PerfilDatos} from "../modelos/PerfilDatos";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule
  ]
})
export class PerfilComponent implements OnInit {

  datosPerfil: PerfilDatos = new PerfilDatos();


  constructor(private perfilService: PerfilService) {
  }

  ngOnInit() {
    this.perfilService.getDatosPerfil().subscribe({
      next: (d) => this.datosPerfil = d,
      error: (e) => console.error(e),
      complete: ()=> console.info(this.datosPerfil)
    })

  }

}
