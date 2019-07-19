import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/User';
import {Role} from '../interfaces/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseRoleURL = '/api/roles';
  constructor(
    private http: HttpClient
  ) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>( this.baseRoleURL );
  }

  getRole(id: number): Observable<Role> {
    return this.http.get<Role>( this.baseRoleURL + '/' + id );
  }
}
