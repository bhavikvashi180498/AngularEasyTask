import { NgModule } from '@angular/core';
import { Tasks } from './tasks';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { SharedModule } from '../common/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [Tasks, Task, AddTask],
    imports: [SharedModule, CommonModule, FormsModule],
    exports: [Tasks]
})
export class TasksModule { }