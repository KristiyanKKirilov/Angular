import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {
  constructor(private apiService: ApiService) { }

  addTheme(form: NgForm): void {

    console.log(form.invalid);
    if(form.invalid){
      return;
    }

    console.log(form.value); 
    //   this.apiService.cre ateTheme(themeName, postText)
    //     .subscribe((data) => {
      //       console.log(data);
      //     })
    }
}
