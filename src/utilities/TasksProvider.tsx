import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { tasksReducer } from "../reducer";
import {Action, ITasksDataStore} from "./interfaces";

interface ITasksContext {
    tasks: ITasksDataStore;
    dispatch: React.Dispatch<Action>
}

export const TasksContext = createContext<ITasksContext | undefined>(undefined)

const TasksProvider: React.FC = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, {}, () => {
        const localData = localStorage.getItem("taskList");
        return localData ? JSON.parse(localData) : {};
    });

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            { children }
        </TasksContext.Provider>
    );
};

const useTask = () => {
    const context = useContext(TasksContext);
    if (context === undefined) {
        throw new Error('useTask must be used within a Provider');
    }

    return context;
}

export { TasksProvider, useTask };
