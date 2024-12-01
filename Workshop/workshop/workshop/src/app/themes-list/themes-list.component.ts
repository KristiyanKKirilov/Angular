import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit{
  themes: Theme[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService
    .getThemes(5)
    .subscribe(themes => {
      this.themes = themes;
    });
  }

}
