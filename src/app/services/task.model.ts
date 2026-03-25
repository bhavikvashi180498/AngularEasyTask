interface TaskModel {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string
}


interface AddTaskModel {
    title: string;
    summary: string;
    dueDate: string
}
