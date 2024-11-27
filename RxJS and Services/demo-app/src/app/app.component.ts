import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-list/user.service';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app'; 
  users: SimpleUser[] = [];

  constructor(private userService: UserService){
    this.users = this.userService.appUsers;
  }

  handleClick(): void {
    this.title = "New title";
  }

  addSimpleUser(name: HTMLInputElement, age: HTMLInputElement) :void{
    this.userService.addUser(name, age);
  }

  
}




