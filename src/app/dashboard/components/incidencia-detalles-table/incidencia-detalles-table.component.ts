import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Incidencia, ResposeIncidencia} from '../../interfaces/incidencia-request.interface';

@Component({
  selector: 'incidencia-detalles-table',
  templateUrl: './incidencia-detalles-table.component.html',
  styleUrls: ['./incidencia-detalles-table.component.css']
})
export class IncidenciaDetallesTableComponent {

  @Input()
  public detallesincidencias: ResposeIncidencia[] = [];

  @Output()
  public onNewCharacter: EventEmitter<string> = new EventEmitter();


  emitCharacter(id:string):void {
   if ( id) {
       this.onNewCharacter.emit(id);
   }
}

}
