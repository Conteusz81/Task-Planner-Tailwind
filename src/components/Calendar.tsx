import React from 'react';
import Navigation from "./Navigation";
import WeekDays from "./WeekDays";
import MonthCells from "./MonthCells";

const Calendar = () => {
    return (
        <div className="font-body h-screen p-3 md:p-6">
            <Navigation />
            <WeekDays />
            <MonthCells />
        </div>
    );
};

export default Calendar;
