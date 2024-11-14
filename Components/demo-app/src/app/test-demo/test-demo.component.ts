import { Component } from '@angular/core';
import { beaverImgSrc, randomGreenMsg, randomRedMsg } from '../constants';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-test-demo',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './test-demo.component.html',
  styleUrl: './test-demo.component.css'
})
export class TestDemoComponent {
  numbers = [1, 2, 3, 4, 5];

  randomMsg = randomRedMsg;
  isShown = false;

  showForm() {
    this.randomMsg = this.randomMsg === randomGreenMsg ? randomRedMsg : randomGreenMsg;
    this.isShown = !this.isShown;
  }

  handleClick(input: HTMLInputElement){
    this.numbers.push(Number(input.value));
    this.isShown = false;
  }

  onOutputActivate(e: boolean): void{
    console.log('output activated', e);
  }
 
}
