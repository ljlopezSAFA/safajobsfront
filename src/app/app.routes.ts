import {Routes} from '@angular/router';
import {HomePage} from "./home/home.page";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {PublicacionesComponent} from "./publicaciones/publicaciones.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {ChatComponent} from "./chat/chat.component";
import {PersonalChatComponent} from "./personal-chat/personal-chat.component";
import {JobsComponent} from "./jobs/jobs.component";
import {BuscadorPerfilesComponent} from "./buscador-perfiles/buscador-perfiles.component";
import {OfertaEmpleoDetallesComponent} from "./oferta-empleo-detalles/oferta-empleo-detalles.component";
import {AptitudesComponent} from "./aptitudes/aptitudes.component";
import {AuthComponent} from "./auth/auth.component";

export const routes: Routes = [

  {path: 'home', component: HomePage,},
  {path: '', redirectTo: 'home', pathMatch: 'full',},
  {path: 'about_us', component:AboutusComponent,},
  {path: 'publicaciones', component:PublicacionesComponent,},
  {path: 'perfil', component: PerfilComponent,},
  {path: 'chats', component: ChatComponent,},
  {path: 'personalchat', component: PersonalChatComponent,},
  {path: 'jobs', component: JobsComponent,},
  {path: 'buscador-perfiles', component: BuscadorPerfilesComponent,},
  {path: 'detalles-empleo/:id', component: OfertaEmpleoDetallesComponent,},
  {path: 'aptitudes', component: AptitudesComponent,},
  {path: 'auth', component: AuthComponent,},
  { path: '**', redirectTo: '' }
];

