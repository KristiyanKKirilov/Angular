import { Component, OnDestroy, OnInit } from '@angular/core';
import { beaverImgSrc } from '../../constants';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit, OnDestroy {
  beaverImage = "";

  ngOnInit(): void {
    setTimeout(() => {
      this.beaverImage = beaverImgSrc;
      console.log('Popup has been created');
      console.log('Opened');
    }, 2000)
  } 

  ngOnDestroy(): void {
    console.log('Closed');
  }
}
