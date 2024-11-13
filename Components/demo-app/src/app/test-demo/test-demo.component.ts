import { Component } from '@angular/core';
import { beaverImgSrc } from '../constants';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-test-demo',
  standalone: true,
  imports: [],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  numbers = [1, 2, 3, 4, 5];

  randomMsg = 'random-red';
  isShown = true;
  beaverImage = beaverImgSrc;

  showForm(event: Event) {
    console.log(event);
    this.randomMsg = this.randomMsg === 'random-green' ? 'random-red' : 'random-green ';
    this.isShown = !this.isShown
  }
}
