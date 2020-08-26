import React, { useContext, useState } from "react";
import { addMonths, subMonths } from "date-fns";

interface IDateContext {
    currentDate: Date;
    nextMonth: () => void;
    prevMonth: () => void;
}

const DateContext = React.createContext<IDateContext | undefined>(undefined);

const DateProvider: React.FC = ({ children }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const value = {
        currentDate,
        nextMonth: () => setCurrentDate(addMonths(currentDate, 1)),
        prevMonth: () => setCurrentDate(subMonths(currentDate, 1)),
    }

    return (
        <DateContext.Provider value={value}>
            {children}
        </DateContext.Provider>
    );
};

const useDate = () => {
    const context = useContext(DateContext);
    if (context === undefined) {
        throw new Error('useDate must be used within a Provider');
    }

    return context;
}

export { DateProvider, useDate };
