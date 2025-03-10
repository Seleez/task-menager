import { Component } from '@angular/core';
import { Task } from '../tasks.model';
import { TaskService } from '../../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {};

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
