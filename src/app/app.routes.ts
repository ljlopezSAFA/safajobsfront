import { Routes } from '@angular/router';
import {HomePage} from "./home/home.page";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {PublicacionesComponent} from "./publicaciones/publicaciones.component";

export const routes: Routes = [

  {path: 'home', component: HomePage,},
  {path: '', redirectTo: 'home', pathMatch: 'full',},
  {path: 'about_us', component:AboutusComponent,},
  {path: 'publicaciones', component:PublicacionesComponent,},
];
