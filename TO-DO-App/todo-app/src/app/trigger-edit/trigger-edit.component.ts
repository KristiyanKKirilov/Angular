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
  @Output() currentIndexProp = new EventEmitter<number>();

  editState(isEditing: boolean){
      this.editingStateProp.emit(isEditing);
      console.log(isEditing);
  }

  setIndex(index: number){
    this.currentIndexProp.emit(index);
    console.log(index);

  }
  triggerEdit():void{        
    if(this.isEditingProp !== null && this.indexProp !== null){
      this.isEditingProp = !this.isEditingProp;
      this.editState(this.isEditingProp);
      this.setIndex(this.indexProp);
    }
}
}
