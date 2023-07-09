import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserReponse, User, User2, Usuario } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject( HttpClient );
  private baseUrl = 'https://reqres.in/api/users';
  private baseUrl2 = 'http://localhost:8081/api/usuarios';

  getUserById( id: number ): Observable<User> {

    return this.http.get<SingleUserReponse>(`${ this.baseUrl }/${ id }`)
      .pipe(
        map( response => response.data ),
        tap( console.log ),
      );

  }

  getUserById2( id: number ): Observable<Usuario[]> {

    return this.http.get<User2>(`${ this.baseUrl2 }`)
      .pipe(
        map( response => response.usuarios ),
        tap( console.log ),
      );

  }

}
