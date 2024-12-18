import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  title = 'demo-modules-app';

  constructor(private userService: UserService){}

  ngOnInit(): void {
    console.log(this.userService.getToken());
  }

}
