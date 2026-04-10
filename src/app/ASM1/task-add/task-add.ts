import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { taskServices } from '../../servicecs/task';
import { Router } from '@angular/router';

@Component({
  selector: 'task/add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-add.html',
  styleUrl: './task-add.css',
})
export class TaskAdd {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private taskService: taskServices,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      title: [''],
      dueDate: [''],
      description: [''],
      status: [false],
      priority: ['']
    });  
  }
  async onSubmit() {
    this.taskService.createTask(this.userForm.value).subscribe({});
    this.router.navigate(['/task']);
  }
}
