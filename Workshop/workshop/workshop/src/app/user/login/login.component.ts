import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router){}

  login(e: Event, email: string, password: string): void{
    e.preventDefault();
    this.userService.login();
    this.router.navigate(['/home']);
  }
}
