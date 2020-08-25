import React from 'react';
import { IDayCardProps } from "../utilities/interfaces";

const DayCard: React.FC<IDayCardProps> = ({ dayID, dayNumber, isSameMonth }) => {
    return (
        <div>
            {dayNumber}
        </div>
    );
};

export default DayCard;
