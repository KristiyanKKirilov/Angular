import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    @Input() currentTaskProp: string | null = null;
    @Input() isEditingProp: boolean | null = null;
    @Output() editingStateProp = new EventEmitter<boolean>();


    editTask(index: number, editedTask: string):void{
        if(this.tasksProp && this.isEditingProp){
          console.log(this.tasksProp[index]);
          this.tasksProp[index] = editedTask;
          this.isEditingProp = false;
          this.updateEditingStateProp(this.isEditingProp);
        }

    }

    updateEditingStateProp(isEditing: boolean):void{
      this.editingStateProp.emit(isEditing);
    }
}
