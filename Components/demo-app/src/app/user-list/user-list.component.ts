import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [
    {id: 1, name: "Tom", age: 25},
    {id: 2, name: "Steve", age: 40},
    {id: 3, name: "Tomson", age: 30},
    {id: 4, name: "Tim", age: 20},
    {id: 5, name: "Tren", age: 22},
  ]
}
