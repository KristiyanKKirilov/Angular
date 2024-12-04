import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/userForAuth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor() { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = null;
      console.log('Invalid parsing object');
    }
  }

  login(){
    this.user = {
      firstName: 'John',
      email: 'john@mail.com',
      phoneNumber: '310-41-23',
      password: '123',
      id: '213ashfas211',
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user)); 
  }

  logout(){
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }
}
