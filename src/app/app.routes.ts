import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'tasks/:id', component: TaskDetailComponent}
];
