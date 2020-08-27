import React from "react";
import { addYears, eachYearOfInterval, format, getYear, subYears } from "date-fns";
import YearNav from "./YearNav";
import { useDate } from "../utilities/DateProvider";
import { Nav } from "../utilities/interfaces";

interface IYearNavProps {
    setNav: (nav: Nav) => void;
}

const YearNavCells: React.FC<IYearNavProps> = ({ setNav }) => {
    const { currentDate, setContextYear } = useDate();

    const subYearStart = subYears(currentDate, 5);
    const addYearEnd = addYears(currentDate, 6);
    const yearsArray = eachYearOfInterval({
        start: subYearStart,
        end: addYearEnd
    });

    const handleYearClick = (year: Date): void => {
        setContextYear(getYear(year));
        setNav("months");
    }

    return (
        <div className="h-full p-3 lg:p-6 grid grid-cols-3 grid-rows-calendar-nav gap-4 lg:gap-8">
                <YearNav subYearStart={subYearStart} addYearEnd={addYearEnd} />
                { yearsArray.map((year, index) => (
                    <div
                        className="text-xl lg:text-4xl font-medium shadow-md bg-gray-100 hover:bg-gray-300 hover:bg-opacity-50 flex justify-center items-center cursor-pointer"
                        key={index}
                        onClick={() => handleYearClick(year)}
                    >
                        {format(year, "yyyy")}
                    </div>
                ))}

        </div>
    );
};

export default YearNavCells;
