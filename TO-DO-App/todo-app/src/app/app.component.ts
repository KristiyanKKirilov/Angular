import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { CreationComponent } from './creation/creation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContentComponent,
    CreationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TO DO';
  tasks: string[] = ['shopping', 'cook dinner'];
  currentItem = 'p';
}
