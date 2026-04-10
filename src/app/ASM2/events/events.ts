import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IEvent, EventServices } from '../../servicecs/event/event';

@Component({
  selector: 'events',
  imports: [CommonModule,RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  constructor(private EventServices: EventServices){}
  events = signal<IEvent[]>([]);
  loadEvent(){
    this.EventServices.fetchEvent().subscribe((data:IEvent[])=>{
      this.events.set(data);
    });
  }
  ngOnInit(){
    this.loadEvent();
  }
  deleteEvent(event:IEvent){
    this.EventServices.deleteEvent(event.id).subscribe((data)=>{
      this.loadEvent();
    });
  }
}

