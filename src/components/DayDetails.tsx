import React from "react";
import DayDetailsNav from "./DayDetailsNav";
import TaskForm from "./TaskForm";

const DayDetails = () => {
    return (
        <div className="p-4 lg:p-8">
            <DayDetailsNav />
            <TaskForm />
        </div>
    );
};

export default DayDetails;
