import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  get isLoggedIn(): boolean{
    return this.userService.isLogged;
  }

  constructor(private userService: UserService){}
}
