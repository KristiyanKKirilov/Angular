import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule    
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
    password: new FormControl('', [Validators.required, Validators.maxLength(5)]),
  });

  constructor(private fb: FormBuilder){} 

  handleSubmit(): void{
    console.log(this.registerForm.invalid);
    if(this.registerForm.invalid){
      console.log('Form in invalid');
      return;
    }
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
