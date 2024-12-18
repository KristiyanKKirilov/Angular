import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/profileDetails';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'JohnDoe',
    email: 'john.doe@gmail.com',
    tel: '123123'
  };

  form = new FormGroup({
    username: new FormControl(this.profileDetails.username, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(this.profileDetails.email, [Validators.required, emailValidator(DOMAINS)]),
    tel: new FormControl(this.profileDetails.tel, [Validators.maxLength(10)]),
  });

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode; 
  }

  handleSaveProfile(): void {
    if (this.form.invalid) {
      return;
    }
 
    this.profileDetails = this.form.value as ProfileDetails;
    this.toggleEditMode();
  }

  onCancel(e: Event):void{
    e.preventDefault();
    console.log('on cancel mode');
    this.toggleEditMode();
  }
}
