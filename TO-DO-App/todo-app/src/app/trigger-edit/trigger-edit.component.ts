import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trigger-edit',
  standalone: true,
  imports: [],
  templateUrl: './trigger-edit.component.html',
  styleUrl: './trigger-edit.component.css'
})
export class TriggerEditComponent {
  @Input() indexProp: number | null = null;
  @Input() isEditingProp: boolean | null = null;
  @Output() editingStateProp = new EventEmitter<boolean>();

  editState(isEditing: boolean){
      this.editingStateProp.emit(isEditing);
      console.log(isEditing);
  }

  triggerEdit():void{        
    if(this.isEditingProp !== null){
      this.isEditingProp = !this.isEditingProp;
      this.editState(this.isEditingProp);
    }
}
}
