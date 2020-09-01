import React from "react";
import {
    addDays,
    endOfMonth,
    endOfWeek,
    formatISO,
    getDate,
    isSameDay,
    isSameMonth,
    isSunday,
    startOfMonth,
    startOfWeek
} from "date-fns";
import { useDate } from "../utilities/DateProvider";
import DayCard from "./DayCard";

const MonthCells = () => {
    const { currentDate } = useDate();
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, {weekStartsOn: 1});
    const endDate = endOfWeek(monthEnd, {weekStartsOn: 1});
    let days = [];
    let day = startDate;

    while (day <= endDate) {
        const dayNumber = getDate(day);
        let dateKey = formatISO(day, {representation: "date"});

        days.push(
            <DayCard
                key={dateKey}
                dateKey={dateKey}
                dayNumber={dayNumber}
                isSameMonth={isSameMonth(day, monthStart)}
                isSameDay={isSameDay(day, new Date())}
                isSunday={isSunday(day)}
            />
        );
        day = addDays(day, 1);
    }

    return (
        <div className="grid grid-cols-7 grid-rows-days gap-2 lg:gap-4">
            {days}
        </div>
    );
};

export default MonthCells;
