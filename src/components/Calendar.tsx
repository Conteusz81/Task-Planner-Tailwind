import React from 'react';
import Navigation from "./Navigation";
import WeekDays from "./WeekDays";

const Calendar = () => {
    return (
        <div className="font-body h-screen p-3 md:p-6">
            <Navigation />
            <WeekDays />
        </div>
    );
};

export default Calendar;
