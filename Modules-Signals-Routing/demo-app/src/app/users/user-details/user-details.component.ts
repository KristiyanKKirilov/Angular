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
  user: User | null = null;
  isLoading = true;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //Service way

    // const userId = this.route.snapshot.params['id'];

    // this.userService
    //   .getSingleUser(userId)
    //   .subscribe((user) => {
    //     this.user = user;
    //     this.isLoading = false;
    //   });

    //Resolver way
    this.user = (this.route.snapshot.data['user']);
    this.isLoading = false;

    //Subscribe for params in the url

    // this.route.params.subscribe(x =>{
    //   console.log(x);
    // });
  }


}
