import { Injectable } from '@angular/core';
import { Task } from './pages/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  private tasks: Task[] = [
    {id: 1, title: "Nauka Angulara", description: "Nauczyć się angulara"},
    {id: 2, title: "Zrobić zadanie", description: "Zadanie..."}
  ]
  getTasks(): Task[]{
    return this.tasks;
  }

  getTaskaById(id: number):Task | undefined{
    return this.tasks.find(task => task.id === id);
  }
}
