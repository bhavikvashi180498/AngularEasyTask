import { Component, input } from '@angular/core';
import { UserModel } from '../services/user.model';
import { TaskService } from '../services/tasks.service';
import { Task } from './task/task';
import { AddTask } from "./add-task/add-task";


@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  isAddingTask = false;
  user = input.required<UserModel>();


  constructor(private taskService: TaskService) { }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user().id);
  }

  onClickAddTask() {
    this.isAddingTask = true;
  }

}
