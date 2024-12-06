import { Component, OnInit, signal } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { MyRouterLinkDirective } from '../directives/my-router-link.directive';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HighlightDirective,
    MyRouterLinkDirective,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  randomPercentage = Math.floor(Math.random() * 100);
  widthInPercentage = `${this.randomPercentage}%`;
  isPercentageAbove50 = this.randomPercentage >= 50;

}
