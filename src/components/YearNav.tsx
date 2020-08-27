import React from "react";
import { format } from "date-fns";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDate } from "../utilities/DateProvider";

interface IYearNavProps {
    subYearStart: Date;
    addYearEnd: Date;
}

const YearNav: React.FC<IYearNavProps> = ({ subYearStart, addYearEnd }) => {
    const { nextYear, prevYear } = useDate();

    return (
        <div className="text-xl lg:text-4xl flex justify-between col-span-3">
            <div className="cursor-pointer pt-1">
                <BsChevronLeft onClick={() => prevYear(12)}/>
            </div>
            <div>
                <div>{format(subYearStart, "yyyy")} - {format(addYearEnd, "yyyy")}</div>
            </div>
            <div className="cursor-pointer pt-1">
                <BsChevronRight onClick={() => nextYear(12)}/>
            </div>
        </div>
    );
};

export default YearNav;
