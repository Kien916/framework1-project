import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventServices } from '../../servicecs/event/event';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'event-add',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './event-add.html',
  styleUrl: './event-add.css',
})
export class EventAdd {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private eventServices: EventServices,
    private router:Router
  ){
    this.userForm = this.fb.group({
      name:[''],
      time:[''],
      status:[''],
      image:[''],
      type:[''],
    });
  }
  async onSubmit(){
    await this.eventServices.createEvent(this.userForm.value).subscribe();
    this.router.navigate(['/events']);
  }
}
