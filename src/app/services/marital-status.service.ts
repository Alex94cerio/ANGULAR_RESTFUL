import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MaritalStatus} from '../interfaces/MaritalStatus';

@Injectable({
  providedIn: 'root'
})
export class MaritalStatusService {

  private baseMaritalStatusURL = '/api/maritalStatuses';
  constructor(
    private http: HttpClient
  ) { }

  getMaritalStatuses(): Observable<MaritalStatus[]> {
    return this.http.get<MaritalStatus[]>( this.baseMaritalStatusURL );
  }

  getMaritalStatus(id: number): Observable<MaritalStatus> {
    return this.http.get<MaritalStatus>( this.baseMaritalStatusURL + '/' + id );
  }
}
