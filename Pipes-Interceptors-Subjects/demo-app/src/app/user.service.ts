import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  loadUsers() {
    this.http
      .get('/api/users')
      .subscribe(res => {
        console.log({res})
      });
  }
}
