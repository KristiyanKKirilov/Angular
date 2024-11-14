import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css'
})
export class CreationComponent {
  @Input() tasksProp: string[] | null = null;

  addTask(task: HTMLInputElement): void {
    if(task.value){
      this.tasksProp?.push(task.value);
      task.value = '';
    }
  }
}
