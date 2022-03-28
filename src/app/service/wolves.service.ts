import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wolf} from '../Wolf';
@Injectable({
  providedIn: 'root'
})

export class WolvesService {
  private baseURL = 'http://lobinhos.herokuapp.com/wolves';
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Wolf[]>{
    return this.http.get<[]>(this.baseURL);
  }

  getOne(id: number): Observable<Wolf>{
    return this.http.get<Wolf>(`${this.baseURL}/${id}`);
  }

  remove(id: number) {
    return this.http.delete<Wolf>(`${this.baseURL}/${id}`);
  }
}
