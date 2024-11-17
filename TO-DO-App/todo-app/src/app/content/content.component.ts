import { Component, Input } from '@angular/core';
import { DeletionComponent } from '../deletion/deletion.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    DeletionComponent,
    EditComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() tasksProp: string[] | null = null;

  printTasks(){
    if(this.tasksProp){
      for (let i = 0; i < this.tasksProp.length; i++) {
          console.log(this.tasksProp[i]);        
      }
    }
    else{
      console.log(null);
    }
    
  }  
}
