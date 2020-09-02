import React from "react";
import { formatISO } from "date-fns";
import DayDetailsNav from "./DayDetailsNav";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useDate } from "../../../context/DateProvider";

const DayDetails = () => {
    const { chosenDay } = useDate();
    const dateKey = formatISO(chosenDay, { representation: 'date' });
    return (
        <div className="p-4 lg:p-8">
            <DayDetailsNav />
            <TaskForm dateKey={dateKey} />
            <TaskList dateKey={dateKey} />
        </div>
    );
};

export default DayDetails;
