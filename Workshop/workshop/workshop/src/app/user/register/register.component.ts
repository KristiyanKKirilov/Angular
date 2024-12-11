import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DOMAINS } from '../../constants';
import { passwordValidator } from '../../utils/password.validator';
import { emailValidator } from '../../utils/email.validator';
import { matchPasswordsValidator } from '../../utils/match-passwords.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule
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
    email: new FormControl('', [
      Validators.required,
      emailValidator(this.domains)  
    ]),
    tel: new FormControl('',),
    //TODO put passwords in group
    passGroup:  new FormGroup({
      password: new FormControl('', [
        Validators.required,
        passwordValidator()]),
      rePassword: new FormControl('', [Validators.required]),
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')],
    }),    
  });

  constructor(private userService: UserService, private router: Router){}
   
  isFieldTextMissing(controlName: string){
    return (
      this.form.get(controlName)?.touched && 
      this.form.get(controlName)?.errors?.['required']
    );
  }

  get isUsernameNotValid(){
    return (
      this.form.get('username')?.touched &&
      this.form.get('username')?.errors?.['minlength']
    );
  }

  get isEmailNotValid(){
    return (
      this.form.get('email')?.touched &&
      this.form.get('email')?.errors?.['emailValidator']
    );
  }

  get isPasswordNotValid(){
    return (
      this.form.get('passGroup')?.get('password')?.touched &&
      this.form.get('passGroup')?.get('password')?.errors?.['passwordValidator']
    );
  }

  get isRePasswordNotValid(){
    return (
      this.form.get('passGroup')?.get('rePassword')?.touched &&
      this.form.get('passGroup')?.errors?.['matchPasswordsValidator']
    );
  }

  get passGroup(){
    return this.form.get('passGroup');
  }


  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username, 
      email, 
      tel,
      passGroup: {password, rePassword} = {},
    } = this.form.value;

    this.userService.register(username!, email!, tel!, password!, rePassword!)
    .subscribe(() => {
      this.router.navigate(['/themes']); 
    });
  }
}
