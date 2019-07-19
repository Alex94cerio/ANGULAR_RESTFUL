import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Skill} from '../interfaces/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseSkillURL = '/api/skills';
  constructor(
    private http: HttpClient
  ) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>( this.baseSkillURL );
  }

  getSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>( this.baseSkillURL + '/' + id );
  }
}
