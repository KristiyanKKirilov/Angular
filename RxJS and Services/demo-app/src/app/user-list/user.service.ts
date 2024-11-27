import { Injectable, OnDestroy } from '@angular/core';
import { ComplexUser, SimpleUser } from '../types';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserService implements OnDestroy{
  URL = 'https://jsonplaceholder.typicode.com/users';

  appUsers: ComplexUser[] =[];

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    //Unsub
  }

  getUsers(){
    // return fetch(this.URL)
    //   .then((res) => res.json()); 
    return this.http.get<ComplexUser[]>(this.URL); 
  }

  addUser(name: HTMLInputElement, age: HTMLInputElement): void {
    const user: SimpleUser = {
      name: name.value,
      age: Number(age.value),
    } ;

    // this.appUsers.push(user);
    // this.appUsers = [...this.appUsers, user];

    name.value = '';
    age.value = '';

  }
}
