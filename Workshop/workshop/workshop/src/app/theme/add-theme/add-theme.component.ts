import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [],
  templateUrl: './add-theme.component.html',
  styleUrl: './add-theme.component.css'
})
export class AddThemeComponent {
  constructor(private apiService: ApiService){}

  addTheme(e: Event, themeName: HTMLInputElement, postText: HTMLTextAreaElement): void{
      e.preventDefault();
      const themeNameValue = themeName.value;
      const postTextValue = postText.value; 

      this.apiService.createTheme(themeNameValue, postTextValue)
      .subscribe((data) => {
        console.log(data);  
      })
  }
}
