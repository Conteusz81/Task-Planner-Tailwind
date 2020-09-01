import { v4 as uuidv4 } from "uuid";
import { Action, EType, ITasksDataStore } from "../utilities/interfaces";

const initialState: ITasksDataStore = {};

export const tasksReducer = (state = initialState, action: Action): ITasksDataStore => {
    switch (action.type) {
        case EType.AddTask:  {
            const newTask = {
                id: uuidv4(),
                ...action.payload.values,
            };
            const prevState = state[action.payload.dateKey] ?? [];
            return {
                ...state,
                [action.payload.dateKey]: [...prevState, newTask]
            }
        }
        case EType.RemoveTask:
            return {
            ...state,
            [action.payload.dateKey]: [
                ...state[action.payload.dateKey].filter((task) => task.id !== action.payload.id),
            ],
        };
        default: return state;
    }
};
