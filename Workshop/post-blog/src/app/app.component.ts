import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ref, get } from '@angular/fire/database';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [FirebaseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private firebaseService: FirebaseService){}

  ngOnInit(): void {
    this.serviceTest();
  }

  serviceTest(){
    this.firebaseService.getAll().subscribe((p) => {
      console.log(p);
    })
  }
}
