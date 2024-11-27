import { Injectable } from '@angular/core';
import { SimpleUser } from '../types';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
   appUsers: SimpleUser[] = [
    { name: 'Steve', age: 20 },
    { name: 'Tom', age: 21 },
    { name: 'Harden', age: 22 },
  ]; 

  constructor() { }
  
  addUser(name: HTMLInputElement, age: HTMLInputElement): void {
    const user: SimpleUser = {
      name: name.value,
      age: Number(age.value),
    };

    this.appUsers.push(user); 
    // this.appUsers = [...this.appUsers, user];
    
    name.value = '';
    age.value = ''; 
 
  }
}
