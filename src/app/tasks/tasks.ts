import { Component, input } from '@angular/core';
import { UserModel } from '../services/user.model';
import { DUMMY_TASKS } from '../services/tasks.service';
import { Task } from './task/task';
import { AddTask } from "./add-task/add-task";

import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  isAddingTask = false;
  user = input.required<UserModel>();
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user()?.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id != id);
  }

  onClickAddTask() {
    this.isAddingTask = true;
  }

  onAddTask(task: AddTaskModel) {
    console.log("reer");
    let createdTask: TaskModel = {
      id: uuidv4(),
      userId: this.user().id,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    };

    this.tasks.push(createdTask);

    this.isAddingTask = false;
  }

}
