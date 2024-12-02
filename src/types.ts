export interface Task {
    id: number | string;
    content: string;
    done: boolean;
}

export interface TasksState {
    tasks: Task[];
    hideDone: boolean;
    loading: boolean;
}