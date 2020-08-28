import React from "react";
import cx from "classnames";
import { GoPrimitiveDot } from "react-icons/go";
import { useDate } from "../utilities/DateProvider";
import { useModal } from "../utilities/ModalProvider";

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
    const { nextMonth, prevMonth, setContextChosenDay } = useDate();
    const { handleNavClickOpen } = useModal();
    const wrapperClassValues = cx("day_card_wrapper", {
        'same_day': isSameDay,
        'bg-teal-200': isSunday,
        'font-bold': isSameMonth,
        'opacity-25 font-base': !isSameMonth
    });

    const handleDayCardClick = () => {
        if (!isSameMonth && dayNumber < 7) {
            nextMonth();
        }
        if (!isSameMonth && dayNumber > 22) {
            prevMonth();
        }
        if (isSameMonth) {
           handleNavClickOpen("day", "up");
           setContextChosenDay(dayNumber);
        }
    }
    return (
        <div className={wrapperClassValues} onClick={handleDayCardClick}>
            <div className="day_number">{dayNumber}</div>
            <div className="task_icon">
                {/*<GoPrimitiveDot style={{color: '#F36888'}}/>*/}
                {/*<GoPrimitiveDot style={{color: '#FF9A5C'}}/>*/}
                <GoPrimitiveDot style={{color: '#90C465'}}/>
            </div>
        </div>
    );
};

export default DayCard;
