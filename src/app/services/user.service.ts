import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUserURL = '/api/users';
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get( this.baseUserURL );
  }

  getUser(id: number): Observable<any> {
    return this.http.get( this.baseUserURL + '/' + id );
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.baseUserURL , user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUserURL + '/' + user.id, user );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUserURL + '/' + id);
  }
}
