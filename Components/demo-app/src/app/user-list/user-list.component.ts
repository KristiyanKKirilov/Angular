import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { User } from './types';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [
    {name: "Tom", age: 25},
    {name: "Steve", age: 40},
    {name: "Tomson", age: 30},
    {name: "Tim", age: 20},
    {name: "Tren", age: 22},
  ]
}
