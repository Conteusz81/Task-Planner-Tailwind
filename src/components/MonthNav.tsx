import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDate } from "../utilities/DateProvider";


const MonthNav: React.FC = ({ children }) => {
    const { nextYear, prevYear } = useDate();

    return (
        <div className="text-xl lg:text-4xl flex justify-between col-span-3">
            <div className="cursor-pointer pt-1">
                <BsChevronLeft onClick={() => prevYear(1)}/>
            </div>
                {children}
            <div className="cursor-pointer pt-1">
                <BsChevronRight onClick={() => nextYear(1)}/>
            </div>
        </div>
    );
};

export default MonthNav;
