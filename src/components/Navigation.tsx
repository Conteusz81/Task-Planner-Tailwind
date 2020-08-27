import React from "react";
import { format } from "date-fns";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDate } from "../utilities/DateProvider";
import { useModal } from "../utilities/ModalProvider";

const Navigation: React.FC = () => {
    const { currentDate, nextMonth, prevMonth } = useDate();
    const { handleDateNavClickOpen } = useModal();

    return (
        <div className="navigation_wrapper">
            <div className="chevron_icon">
                <BsChevronLeft onClick={prevMonth}/>
            </div>
            <div className="flex cursor-pointer">
                <div className="mr-3" onClick={() => handleDateNavClickOpen("months")}>{format(currentDate, "MMMM")}</div>
                <div onClick={() => handleDateNavClickOpen("years")}>{format(currentDate, "yyyy")}</div>
            </div>
            <div className="chevron_icon">
                <BsChevronRight onClick={nextMonth}/>
            </div>
        </div>
    );
};

export default Navigation;
