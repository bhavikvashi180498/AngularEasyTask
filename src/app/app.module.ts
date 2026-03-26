import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { User } from './user/user';
import { SharedModule } from './common/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, User],
  imports: [BrowserModule, SharedModule, TasksModule],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }