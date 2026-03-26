import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { AddTask } from './tasks/add-task/add-task';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './common/shared.module';

@NgModule({
  declarations: [App, User, Tasks, Task, AddTask ],
  imports: [BrowserModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }