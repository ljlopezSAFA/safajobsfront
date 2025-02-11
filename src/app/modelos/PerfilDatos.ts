import {Aptitud} from "./Aptitud";
import {ExperienciaEducativa} from "./ExperienciaEducativa";
import {ExperienciaLaboral} from "./ExperienciaLaboral";

export class PerfilDatos{
  nombre?:string;
  apellidos?:string;
  puesto?:string;
  mail?:string;
  foto?:string;
  fechaNacimiento?:string;
  aptitudes?: Aptitud[];
  educacion?: ExperienciaEducativa[];
  experienciaLaboral?: ExperienciaLaboral[];

}
