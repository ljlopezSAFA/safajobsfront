import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'fechaFormateada'
})
export class FechaFormateada implements PipeTransform {
  transform(value: string): string {
    const fechaObjeto = new Date(value);
    return fechaObjeto.toLocaleString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}
