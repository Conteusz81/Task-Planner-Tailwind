import React from "react";
import DayDetailsNav from "./DayDetailsNav";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const DayDetails = () => {
    return (
        <div className="p-4 lg:p-8">
            <DayDetailsNav />
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default DayDetails;
