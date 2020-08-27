import React from "react";
import { eachMonthOfInterval, endOfYear, format, startOfYear } from "date-fns";
import MonthNav from "./MonthNav";
import { useDate } from "../utilities/DateProvider";
import { useModal } from "../utilities/ModalProvider";
import { Nav } from "../utilities/interfaces";

interface IYearNavProps {
    setNav: (nav: Nav) => void;
}

const MonthNavCells: React.FC<IYearNavProps> = ({ setNav }) => {
    const { currentDate, setContextMonth } = useDate();
    const { handleClose } = useModal();

    const yearStart = startOfYear(currentDate);
    const yearEnd = endOfYear(currentDate);
    const monthsArray = eachMonthOfInterval({
        start: yearStart,
        end: yearEnd,
    });
    const fullMonthFormat = "MMMM";
    const shortMonthFormat = "MMM";

    const handleMonthClick = (month: number): void => {
        setContextMonth(month);
        handleClose();
    }
    return (
        <div className="h-full p-3 md:p-6 grid grid-cols-3 grid-rows-calendar-nav gap-4 md:gap-8">
            <MonthNav>
                <div onClick={() => setNav("years")}>
                    {format(currentDate, "yyyy")}
                </div>
            </MonthNav>
            { monthsArray.map((month, index) => (
                <div
                    className="flex justify-center items-center text-xl lg:text-4xl bg-gray-100 hover:bg-gray-300 hover:bg-opacity-50 font-medium shadow-md cursor-pointer"
                    key={index}
                    onClick={() => handleMonthClick(index)}
                >
                    <span className="hidden md:inline-block">
                        {format(month, fullMonthFormat)}
                    </span>
                    <span className="md:hidden">
                        {format(month, shortMonthFormat)}
                    </span>
                </div>
            ))}

        </div>
    );
};

export default MonthNavCells;
