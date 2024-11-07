import {Empresa} from "./Empresa";

export class OfertaEmpleo {
  id?:number;
  titular?:string;
  puesto?:string;
  requisitos?:string;
  remuneracion?:number;
  remuneracionMinima?:number;
  remuneracionMaxima?:number;
  empresa?:Empresa;
  visibilidad:boolean = false;
}
