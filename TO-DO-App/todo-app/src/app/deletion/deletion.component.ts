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

  deleteTask(index: number):void{
    if(this.tasksProp){
        this.tasksProp?.splice(index, 1);
    }
  }
}
