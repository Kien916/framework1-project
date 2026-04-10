import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = "http://localhost:3000/"
export interface ITask{
  id:number,
  title:string,
  dueDate:string,
  description:string,
  status:boolean,
  priority:string
}
@Injectable({
  providedIn: 'root',
})
export class taskServices {
  constructor(private http: HttpClient
  ){}
  fetchTask():Observable<ITask[]>{
    return this.http.get<ITask[]>(API + "tasks")
  }
  deleteTask(id: number): Observable<ITask>{
    return this.http.delete<ITask>(API + 'tasks/' + id)
  }
  createTask(task:Omit<ITask,'id'>){
    return this.http.post(API + "tasks",task)
  }
}