import { Component, Input, OnInit } from '@angular/core';
import { SimpleUser } from '../../types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit{
  @Input('user') user: SimpleUser | null = null;

  constructor(private us: UserService){
  }

  ngOnInit(): void{
    // console.log(this.user?.name + '-' + JSON.stringify(this.us.appUsers, null, 4)); 
  }
}
