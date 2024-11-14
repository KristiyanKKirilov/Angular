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
    setInterval(() => {
      this.beaverImage = beaverImgSrc;
      console.log('Popup has been created');

    }, 3000)
  } 

  ngOnDestroy(): void {
    
  }
}
