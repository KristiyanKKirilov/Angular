import { Component, Input, Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { beaverImgSrc } from '../../constants';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit, OnDestroy {
  @Input('isShown') isShown = false;  
  @Output() onChildEvent = new EventEmitter<boolean>();

  beaverImage = "";
  toggle = false;

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

  handleClick(){
    console.log('click');
     this.onChildEvent.emit(!this.toggle);   
  }
 
}
