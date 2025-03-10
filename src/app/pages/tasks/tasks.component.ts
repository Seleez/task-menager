import { Component } from '@angular/core';
import { Task } from '../tasks.model';
import { TaskService } from '../../task.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){}

  ngOnInit(){
    this.tasks = this.taskService.getTasks();
  }
}
