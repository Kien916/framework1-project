import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../servicecs/event/auth-event/auth';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'register-event',
  imports: [ReactiveFormsModule],
  templateUrl: './register-event.html',
  styleUrl: './register-event.css',
})
export class RegisterEvent {
  userForm: FormGroup
  constructor(
    private fb:FormBuilder,
    private auth:Auth,
    private router:ActivatedRoute,
    private navitation:Router
  ){
    this.userForm = this.fb.group({
       username:[''],
      email:[''],
      password:['']
    });
  }
  async onSubmit(){
    await this.auth.register(this.userForm.value).subscribe()
    this.navitation.navigate(['/events'])
  }
}
