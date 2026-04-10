import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth/auth';
@Component({
  selector: 'login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: Auth) {
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  async onSubmit() {
    await this.auth.login(this.userForm.value).subscribe();
  }
}
