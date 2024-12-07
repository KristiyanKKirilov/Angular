import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;

  formSubmitHandler(): void {
    console.log('From submitted');
    console.log(this.form); 

    if(this.form?.invalid){
      console.log('Invalid form');
      return;
    }

    console.log(this.form?.value);
  }
}
