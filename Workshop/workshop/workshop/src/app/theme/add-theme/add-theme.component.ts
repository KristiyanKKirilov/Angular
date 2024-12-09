import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
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

  addTheme(themeName: string, postText: string): void {
    this.apiService.createTheme(themeName, postText)
      .subscribe((data) => {
        console.log(data);
      })
  }
}
