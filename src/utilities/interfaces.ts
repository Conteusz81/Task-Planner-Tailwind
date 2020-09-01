export type Nav = "day" | "months" | "years";

export enum EPriority {
    HIGH = "A",
    MEDIUM = "B",
    LOW = "C",
}

export enum EType {
    AddTask,
    RemoveTask
}

export type Action = {
    type: EType.AddTask;
    payload: {
        dateKey: string;
        values: {
            task: string;
            priority: EPriority;
        }
    }
} | {
    type: EType.RemoveTask;
    payload: {
        dateKey: string;
        id: string;
    }
}


export interface ITask {
    id: string;
    task: string;
    priority: EPriority;
}

export interface ITasksDataStore {
    [key: string]: ITask[]
}
