
export class  InscripcionOferta{
  idOferta?:number;
  idUsuario?:number;


  constructor(idOferta: number, idUsuario: number) {
    this.idOferta = idOferta;
    this.idUsuario = idUsuario;
  }
}
