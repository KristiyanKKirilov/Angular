import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  appUsers: SimpleUser [] = [
    {name: 'Steve', age: 20},
    {name: 'Tom', age: 21},
    {name: 'Harden', age: 22},
  ];

  handleClick(): void {
    this.title = "New title";
  }
}




