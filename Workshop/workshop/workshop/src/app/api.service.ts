import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    const {apiUrl} = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts/.json`)
  }
}
