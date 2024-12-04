import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit{
  themes: Theme[] = [];
  isLoading = true;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService
    .getThemes(5)
    .subscribe(themes => {
      this.themes = themes;
        this.isLoading = false;
    });
  }

}