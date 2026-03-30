import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ITask, taskServices } from '../../servicecs/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
constructor(
  private taskService: taskServices
) { }
tasks = signal<ITask[]>([]);

loadTask() {
  this.taskService.fetchTask().subscribe((data: ITask[]) => {
    this.tasks.set(data);
  });
}
ngOnInit(){
  this.loadTask();
}
deleteTask(task: ITask){
  this.taskService.deleteTask(task.id).subscribe((data) => {
    this.loadTask();
  });
}
}
