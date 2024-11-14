import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css'
})
export class CreationComponent {
  @Input() item = '';
}
