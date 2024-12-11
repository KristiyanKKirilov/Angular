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
    let url = '/api/posts';
    
    return this.http.get<Post[]>(url)
  }

  getThemes(limit?: number):  Observable<Theme[]>{
    let url = '/api/themes';

    return this.http.get<Theme[]>(url);
  }

  getSingleTheme(id: string): Observable<Theme>{
    return this.http.get<Theme>(`/api/themes/${id}`);
  }

  createTheme(themeName: string, postText: string): Observable<Theme>{
    const payload = {themeName, postText};
    return this.http.post<Theme>('/api/themes', payload);
  }


}
