import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { User } from './user/user';
import { Header } from './common/header/header';
import { Tasks } from './tasks/tasks';
import { Card } from './common/card/card';
import { Task } from './tasks/task/task';
import { AddTask } from './tasks/add-task/add-task';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Header, User, Tasks, Task, AddTask, Card ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }