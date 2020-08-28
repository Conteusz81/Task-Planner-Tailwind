import React from 'react';
import { EPriority } from "../utilities/interfaces";
import { Field, Form, Formik } from "formik";
import RadioButton from "./RadioButton";

const validateTaskName = (value: string) => {
    let error;
    if (!value) {
        error = 'Please fill out this field.';
    }
    return error;
};

const TaskForm = () => {
    const initialValue = { task: "", picked: EPriority.LOW }
    return (
        <div>
            <Formik
                initialValues={ initialValue }
                onSubmit={(values, { resetForm }) => {
                    resetForm();
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                  }) => (
                    <Form autoComplete="off">
                        <div className="flex justify-between">
                            <Field
                                className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                type="text"
                                name="task"
                                validate={validateTaskName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.task}
                                placeholder="Add Task"
                            />

                            <button type="submit" className="bg-white w-1/5 hover:bg-gray-100 text-gray-800 focus:outline-none font-medium py-2 border border-gray-400 rounded shadow">Add</button>
                        </div>

                        {errors.task && touched.task && <div className="text-red-500 text-xs italic mt-2">{errors.task}</div>}
                        <div>
                            <RadioButton value={EPriority.HIGH} checked={values.picked === EPriority.HIGH}>
                                High
                            </RadioButton>
                            <RadioButton value={EPriority.MEDIUM} checked={values.picked === EPriority.MEDIUM}>
                                Medium
                            </RadioButton>
                            <RadioButton value={EPriority.LOW} checked={values.picked === EPriority.LOW}>
                                Low
                            </RadioButton>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default TaskForm;
