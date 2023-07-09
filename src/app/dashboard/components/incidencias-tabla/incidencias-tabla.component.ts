import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Incidencia } from '../../interfaces/incidencia-request.interface';
import {searchBy} from "../../interfaces/search-incidencia.interface";

@Component({
  selector: 'incidencias',
  templateUrl: './incidencias-tabla.component.html',
  styleUrls: ['./incidencias-tabla.component.css']
})
export class IncidenciasTablaComponent implements OnInit {
  ngOnInit(): void {
    this.busqueda = {
            estado:    '',
            mensaje:   ''
          }
  }

  @Input()
  public incidencias: Incidencia[] = [];

  public classResuelta = "nav-link ";
  public classEnCurso ="nav-link active";

  @Output()
  public onNewCharacter: EventEmitter<string> = new EventEmitter();


  /***Busqueda emitir valores */
  @Output()
  public onSearchIncidencia: EventEmitter<searchBy> = new EventEmitter();
  public initialValue: string = '';
  public busqueda:searchBy={
    estado:    '',
    mensaje:   ''
  }



  /***Fin busqueda emitir valores */


  emitCharacter(id:string):void {
   if ( id) {
       this.onNewCharacter.emit(id);
   }
  }

  activar( act: string ): void {
    this.onNewCharacter.emit('');
    if  (act === '1') {
      this.classResuelta = "nav-link ";
      this.classEnCurso ="nav-link active";
      this.busqueda.estado='en-curso';
      this.onSearchIncidencia.emit(this.busqueda);
    }else{
      this.classResuelta = "nav-link active";
      this.classEnCurso ="nav-link ";
      this.busqueda.estado='resuelta';
      this.onSearchIncidencia.emit(this.busqueda);
    }

  }


  searchByCapital( term: string ):void  {
    this.onNewCharacter.emit('');
    this.busqueda.mensaje=term;
    this.onSearchIncidencia.emit(this.busqueda);
  }

}
