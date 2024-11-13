import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { beaverImgSrc } from './constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    FooterComponent,
    UserListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';

  numbers = [1, 2, 3, 4, 5];

  randomMsg = 'random-red';
  isShown = true;
  beaverImage = beaverImgSrc;

  showForm(event: Event){
    console.log(event); 
    this.randomMsg = this.randomMsg === 'random-green'? 'random-red' : 'random-green ';
      this.isShown = !this.isShown
  }
}
