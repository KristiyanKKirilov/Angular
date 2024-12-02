import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  title = 'demo-app';
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);
  
  ngOnInit(): void {
    console.log(`counter: ${this.counter()}`);
  }
  increment(): void {
    const value = this.counter() + 1;
    this.counter.set(value);
  }
}
