import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { tasksReducer } from "../reducer";
import { Action, ITask, ITasksDataStore } from "../utilities/interfaces";

interface ITasksContext {
    tasks: ITasksDataStore;
    dispatch: React.Dispatch<Action>;
    getMonthData: (isoMonthDates: string[]) => ITasksDataStore;
    getDayData: (isoDate: string) => ITask[] | [];
}

export const TasksContext = createContext<ITasksContext | undefined>(undefined)

const TasksProvider: React.FC = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, {}, () => {
        const localData = localStorage.getItem("taskList");
        return localData ? JSON.parse(localData) : {};
    });

    const handleMonthData = (isoMonthDates: string[]) => {
        const monthData: ITasksDataStore = isoMonthDates
            .reduce((obj, key) => ({...obj, [key]: tasks[key] ?? []}), {});
        return monthData;
    }

    const handleDayData = (isoDate: string) => {
        return tasks[isoDate] ?? [];
    }

    const value = {
        tasks,
        dispatch,
        getMonthData: (isoMonthDates: string[]) => handleMonthData(isoMonthDates),
        getDayData: (isoDate: string) => handleDayData(isoDate)
    }

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={value}>
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
