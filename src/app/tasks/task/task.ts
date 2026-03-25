import { Component, input, output } from '@angular/core';
import { Card } from '../../common/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
