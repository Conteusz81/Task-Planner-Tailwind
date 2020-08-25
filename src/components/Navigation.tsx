import React from "react";
import { format } from "date-fns";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDate } from "../utilities/DateProvider";

const Navigation: React.FC = () => {
    const { currentDate, nextMonth, prevMonth } = useDate();
    return (
        <div className="flex justify-between text-xl md:text-4xl mb-6 font-semibold">
            <div className="cursor-pointer pt-1">
                <BsChevronLeft onClick={prevMonth}/>
            </div>
            <div className="flex cursor-pointer">
                <div className="mr-2">{format(currentDate, "MMMM")}</div>
                <div>{format(currentDate, "yyyy")}</div>
            </div>
            <div className="cursor-pointer pt-1">
                <BsChevronRight onClick={nextMonth}/>
            </div>
        </div>
    );
};

export default Navigation;
