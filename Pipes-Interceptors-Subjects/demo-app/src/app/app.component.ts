import { CommonModule, LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { interval, map } from 'rxjs';
import { ReducePipe } from './reduce.pipe';
import { UserService } from './user.service';
import { httpInterceptor } from './http.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReducePipe,
    RouterLink,
  ],
  providers: [], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'demo-app';


  user = {
    name: 'John',
    age: 22,
    grades: [5, 4, 2, 3, 4]
  };

  constructor(private userService: UserService){}
  
  sum(acc: number, cur: number): number {
    return acc + cur;
  }

  addProperty() {
    (this.user as any).test = 'test123';
    this.user.grades.push(-5);
  }


  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 2000);
  });

  time$ = interval(1000).pipe(map(() => new Date()));

  loadUsers(){
    this.userService.loadUsers();
  }
}
