import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deletion',
  standalone: true,
  imports: [],
  templateUrl: './deletion.component.html',
  styleUrl: './deletion.component.css'
})
export class DeletionComponent {
  @Input() tasksProp: string[] | null = null;
  @Input() indexProp: number | null = null;

  deleteTask(i: number){
    if(this.tasksProp){
        this.tasksProp?.splice(i, 1);
    }
  }
}
