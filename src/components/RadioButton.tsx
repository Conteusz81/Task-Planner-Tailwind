import React from 'react';
import { Field } from "formik";
import { EPriority } from "../utilities/interfaces";

interface IRadioProps {
    value: EPriority;
    checked: boolean;
}

const RadioButton: React.FC<IRadioProps> = ({value, checked, children}) => {
    return (
        <label>
            <Field
                type="radio"
                name="picked"
                value={value}
            />
            { checked ? <div  /> : <div  /> }
            {children}
        </label>
    );
};

export default RadioButton;
