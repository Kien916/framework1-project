import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = "http://localhost:3000/"
export interface IEvent{
  id:number,
  name:string,
  time:number,
  status:boolean,
  image:string,
  type:string
}
@Injectable({
  providedIn: 'root',
})
export class EventServices {
  constructor(
    private http: HttpClient
  ){}
  fetchEvent():Observable<IEvent[]>{
    return this.http.get<IEvent[]>(API + "event")
  }
  deleteEvent(id:number):Observable<IEvent>{
    return this.http.delete<IEvent>(API + "event/" + id)
  }
  createEvent(event:Omit<IEvent,'id'>){
    return this.http.post(API + "event",event)
  }
  getEventById(id:number):Observable<IEvent>{
    return this.http.get<IEvent>(API + 'event/' + id)
  }
  updateEvent(id:number, event:Omit<IEvent,'id'>){
    return this.http.put(API + 'event/' +id,event)
  }
}
