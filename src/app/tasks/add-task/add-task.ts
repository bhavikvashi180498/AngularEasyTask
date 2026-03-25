import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {

  cancel = output<void>();
  //forms related properties
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');


  onCancel() {
    this.cancel.emit();
  }

}
