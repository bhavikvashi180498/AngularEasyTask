import { Component, input } from '@angular/core';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskModel>();

  constructor(private taskService: TaskService) { }

  completeTask() {
    this.taskService.removeTask(this.task().id);
  }
}
