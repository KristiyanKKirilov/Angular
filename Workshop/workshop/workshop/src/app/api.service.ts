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

  getPosts(limit?: number): Observable<Post[]>{
    const {apiUrl} = environment;
    let url = `${apiUrl}/posts`;
    
    if(limit){
      url += `?limit=${limit}`; 
    }

    return this.http.get<Post[]>(url)
  }

  getThemes(limit?: number):  Observable<Theme[]>{
    const {apiUrl} = environment;
    let url = `${apiUrl}/themes`;

    if(limit){
      url += `?limit=${limit}`; 
    }
    
    return this.http.get<Theme[]>(url);
  }
}
