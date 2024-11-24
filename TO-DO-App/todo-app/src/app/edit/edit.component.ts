import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
    @Input() indexProp: number | null = null;
    @Input() tasksProp: string[] | null = null;
    
    isEditing = false;
    currentTask = "";   

    editTask(index: number, editedTask: string):void{
      this.isEditing = !this.isEditing;
        if(this.tasksProp){
          this.tasksProp[index] = editedTask;
        }

    }
}
