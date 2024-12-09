import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DOMAINS } from '../../constants';
import { EmailDirective } from '../../directives/email.directive';
import { PasswordDirective } from '../../directives/password.directive';
import { passwordValidator } from '../../utils/password.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    EmailDirective,
    PasswordDirective,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  domains: string[] = DOMAINS;
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required]),
    tel: new FormControl('',),
    //TODO put passwords in group
    password: new FormControl('', [
      Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
  });

  register(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.form.reset();
  }
}
