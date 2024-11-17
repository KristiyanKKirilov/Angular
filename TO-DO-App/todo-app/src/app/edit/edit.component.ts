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

    triggerEdit(index: number):void{
        this.isEditing = true;
       if(this.tasksProp){
        this.currentTask = this.tasksProp[index];
        }
    }

    editTask(index: number, editedTask: string):void{
      this.isEditing = false;
        if(this.tasksProp){
          this.tasksProp[index] = editedTask;
        }

    }
}
