import React from "react";
import cx from "classnames";
import { GoPrimitiveDot } from "react-icons/go";
import { useDate } from "../utilities/DateProvider";

export interface IDayCardProps {
    dayID: string;
    dayNumber: number;
    isSameMonth: boolean;
    isSameDay: boolean;
    isSunday: boolean;
}

const DayCard: React.FC<IDayCardProps> = ({
         dayID,
         dayNumber,
         isSameMonth,
         isSameDay,
         isSunday
    }) => {
    const { nextMonth, prevMonth } = useDate();
    const wrapperClassValues = cx("rounded-lg cursor-pointer flex flex-col p-1 md:p-2", {
        'border-solid border-2 border-gray-600': isSameDay,
        'bg-teal-200': isSunday,
        'shadow-md font-bold': isSameMonth,
        'shadow-sm text-gray-600 font-light text-base': !isSameMonth
    });
    const iconsClassValues = cx(
        "flex flex-col items-center md:flex-row md:justify-end md:text-2xl lg:text-3xl", {
        'opacity-25': !isSameMonth,
    });

    const handleDayCardClick = () => {
        if (!isSameMonth && dayNumber < 7) {
            nextMonth()
        }
        if (!isSameMonth && dayNumber > 22) {
            prevMonth()
        }
        if (isSameMonth) {
            console.log(dayID);
        }
    }
    return (
        <div className={wrapperClassValues} onClick={handleDayCardClick}>
            <div className="text-base mb-auto text-center md:text-lg lg:text-2xl md:text-left">{dayNumber}</div>
            <div className={iconsClassValues}>
                {/*<GoPrimitiveDot style={{color: '#F36888'}}/>*/}
                {/*<GoPrimitiveDot style={{color: '#FF9A5C'}}/>*/}
                <GoPrimitiveDot style={{color: '#90C465'}}/>
            </div>
        </div>
    );
};

export default DayCard;
