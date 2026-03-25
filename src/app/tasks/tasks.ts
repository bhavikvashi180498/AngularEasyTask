import { Component, input } from '@angular/core';
import { UserModel } from '../services/user.model';
import { DUMMY_TASKS } from '../services/tasks.service';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  user = input.required<UserModel>();
  tasks = DUMMY_TASKS;


  addTask() {
    console.log('Adding task for user:', this.user()?.name);
  }

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user()?.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id != id);
  }

}
