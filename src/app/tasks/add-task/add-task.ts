import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {

  cancel = output<void>();

  onCancel() {
    this.cancel.emit();
  }

}
