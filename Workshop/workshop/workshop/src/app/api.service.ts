import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    const {apiUrl} = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`)
  }

  getThemes():  Observable<Theme[]>{
    const {apiUrl} = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }
}
