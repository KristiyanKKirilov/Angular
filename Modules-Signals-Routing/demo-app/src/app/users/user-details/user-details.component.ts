import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../types/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['id'];

    this.userService
      .getSingleUser(userId)
      .subscribe((user) => {
        console.log(user);
      })
  }


}
