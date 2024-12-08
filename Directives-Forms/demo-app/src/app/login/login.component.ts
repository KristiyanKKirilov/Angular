import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MaxCountDirective } from '../directives/max-count.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MaxCountDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;
  maxCountNumber = 4;

  formSubmitHandler(): void {
    if(this.form?.invalid){
      console.log('Invalid form');
      return;
    }

    this.form?.reset();

  }
}
