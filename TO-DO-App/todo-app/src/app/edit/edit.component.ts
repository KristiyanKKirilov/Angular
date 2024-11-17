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
        this.isEditing = !this.isEditing;
        this.currentTask = "";
       if(this.tasksProp){
        this.currentTask = this.tasksProp[index];
        console.log(this.tasksProp[index]);

        }
    }

    editTask(index: number, editedTask: string):void{
      this.isEditing = !this.isEditing;
        if(this.tasksProp){
          this.tasksProp[index] = editedTask;
        }

    }
}
