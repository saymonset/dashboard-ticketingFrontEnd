import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, tap, of } from 'rxjs';
import {
  CrearResposeIncidencia,
  DetallesIncidencia,
  Incidencia,
  ResponIncidencias,
  ResposeIncidencia
} from '../interfaces/incidencia-request.interface';
import {searchBy} from "../interfaces/search-incidencia.interface";

@Injectable({
  providedIn: 'root'
})
export class IncidenciaServiceService {


  private http = inject( HttpClient );
  private baseUrl = 'http://localhost:8081/api';
  //localhost:8081/api/incidencias

  //localhost:8081/api/incidencias
//localhost:8081/api/incidencias?estado=en-curso&mensaje=mundo

  getIncidencias(busqueda:searchBy): Observable<Incidencia[]> {

    const params = new HttpParams()
      .set('estado', busqueda.estado)
      .set('mensaje', busqueda.mensaje);


    return this.http.get<ResponIncidencias>(`${ this.baseUrl }/incidencias`,{params})
      .pipe(
        map( response => {
          return response.incidencias} ),
        tap( console.log ),
      );
  }


  geDetallesIncidencias(id:string): Observable<ResposeIncidencia[]> {
//return this.http.patch<Hero>(`${ this.baseUrl }/heroes/${ hero.id }`, hero );
    return this.http.get<DetallesIncidencia>(`${ this.baseUrl }/resincidencias/${id}`)
      .pipe(
        map( response => {
          return response.respose_incidencias} ),
        tap( console.log ),
      );
  }

  // crearDetallesIncidencias(id:string): Observable<ResposeIncidencia[]> {
  //   return this.http.post<CrearResposeIncidencia>(`${ this.baseUrl }/resincidencias`)
  //     .pipe(
  //       map( response => {
  //         return of(true)} ),
  //       tap( console.log ),
  //     );
  // }
  //
  // authenticate(userDTO: UserDTO): Observable<boolean> {
  //   return this.http.post<any>(this.baseUrl + 'autenticate/user', userDTO, this.getOptions())
  //     .pipe(catchError((error: Response) =>
  //       throwError(`Authentication Failed. Network Error: ${error.statusText} (${error.status})`)))
  //     .pipe(map(response => {
  //       this.auth_token = response.success ? response.token : null;
  //       return response.success;
  //     }));
  // }



  constructor() { }
}
