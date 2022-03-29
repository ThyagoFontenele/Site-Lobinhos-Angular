import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wolf} from '../Wolf';
@Injectable({
  providedIn: 'root'
})

export class WolvesService {
  private baseURL = 'http://lobinhos.herokuapp.com/wolves';
  
  constructor(private https: HttpClient) { }

  getAll(): Observable<Wolf[]>{
    return this.https.get<Wolf[]>(this.baseURL);
  }

  getAllAdopted(): Observable<Wolf[]>{
    return this.https.get<Wolf[]>(`${this.baseURL}/adopted`);
  }

  getOne(id: number): Observable<Wolf>{
    return this.https.get<Wolf>(`${this.baseURL}/${id}`);
  }

  remove(id: number) {
    return this.https.delete<Wolf>(`${this.baseURL}/${id}`);
  }
}
