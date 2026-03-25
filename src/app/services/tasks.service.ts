import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

// allows angular to scan for this service by making it as Injectable 
@Injectable({ providedIn: 'root' })
export class TaskService {

    private tasks: TaskModel[] = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ];

    getUserTasks(userId: string): TaskModel[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    addNewTask(taskData: AddTaskModel, userId: string): void {
        const createdTask: TaskModel = {
            id: uuidv4(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
        };

        this.tasks.push(createdTask);
    }

    removeTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id != id);
    }

}


export const DUMMY_TASKS: TaskModel[] = [
    {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
    },
    {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
    },
    {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
            'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
    },
]