import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() tasks: string[] | null = null;

  printTasks(){
    if(this.tasks){
      for (let i = 0; i < this.tasks.length; i++) {
          console.log(this.tasks[i]);        
      }
    }
    else{
      console.log(null);
    }
    
  }
}
