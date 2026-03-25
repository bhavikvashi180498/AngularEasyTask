import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/tasks.service';


@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {

  userId = input.required<string>();
  closeAddTaskDialog = output<void>();
  //forms related properties
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');


  constructor(private taskService: TaskService) { }

  onCancel() {
    this.closeAddTaskDialog.emit();
  }

  onSubmit() {
    if (this.enteredTitle() && this.enteredSummary() && this.enteredDueDate()) {
      this.taskService.addNewTask({
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDueDate()
      }, this.userId());
    } else {
      console.log('Form invalid');
    }

    this.closeAddTaskDialog.emit();
  }

}
