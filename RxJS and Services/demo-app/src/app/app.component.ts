import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-list/user.service';
import { ComplexUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'demo-app'; 
  users: ComplexUser[] = [];
  isLoading = true;

  constructor(private userService: UserService){
    this.users = this.userService.appUsers;
  }

  ngOnInit(): void {
    // this.userService.getUsers()
    //   .then((users) => {
    //     this.users = users;
    //   });
    this.userService.getUsers().subscribe(users => {
      setTimeout(() => {
        this.users = users;
        this.isLoading = false;
      }, 3000)
      
    });

  }

  handleClick(): void {
    this.title = "New title";
  }

  addSimpleUser(name: HTMLInputElement, age: HTMLInputElement) :void{
    this.userService.addUser(name, age);
  }

  
}




