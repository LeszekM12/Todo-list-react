export interface Task {
    id: number;
    content: string;
    done: boolean;
}

export interface TasksState {
    tasks: Task[];
    hideDoneTasks: boolean;
    loading: boolean;
}