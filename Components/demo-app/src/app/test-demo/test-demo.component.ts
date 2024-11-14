import { Component } from '@angular/core';
import { beaverImgSrc, randomGreenMsg, randomRedMsg } from '../constants';

@Component({
  selector: 'app-test-demo',
  standalone: true,
  imports: [],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  numbers = [1, 2, 3, 4, 5];

  randomMsg = randomRedMsg;
  isShown = false;
  beaverImage = beaverImgSrc;

  showForm() {
    this.randomMsg = this.randomMsg === randomGreenMsg ? randomRedMsg : randomGreenMsg;
    this.isShown = !this.isShown;
  }

  handleClick(emailInput: HTMLInputElement){
    this.numbers.push(Number(emailInput.value));
    this.isShown = false;
    this.randomMsg = this.randomMsg === randomGreenMsg ? randomRedMsg : randomGreenMsg;
  }
}
