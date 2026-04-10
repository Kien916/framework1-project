import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventServices } from '../../servicecs/event/event';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'event-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './event-edit.html',
  styleUrl: './event-edit.css',
})
export class EventEdit {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private eventServices: EventServices,
    private router:ActivatedRoute,
    private navigattion: Router
  ){
    this.userForm = this.fb.group({
      name:[''],
      time:[''],
      status:[''],
      image:[''],
      type:[''],
    });
  }
  id:number = 0;
  ngOnInit(){
    this.router.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.eventServices.getEventById(this.id).subscribe((data)=>{
      this.userForm.patchValue(data);
    })
  }
  async onSubmit(){
    await this.eventServices.updateEvent(this.id,this.userForm.value).subscribe()
    this.navigattion.navigate(['/events'])
  }
}
