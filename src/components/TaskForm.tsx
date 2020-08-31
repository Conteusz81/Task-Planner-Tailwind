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
                    console.log(values);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                  }) => (
                    <Form autoComplete="off" className="mb-8">
                        <div className="h-16">
                            <div className="flex justify-between">
                                <Field
                                    className="form_input focus:outline-none focus:bg-white"
                                    type="text"
                                    name="task"
                                    validate={validateTaskName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.task}
                                    placeholder="Add Task"
                                />
                                <button
                                    type="submit"
                                    className="form_submit_button hover:bg-gray-100 focus:outline-none"
                                >
                                    Add
                                </button>
                            </div>
                            {
                                errors.task && touched.task &&
                                <div className="text-red-500 text-xs italic">
                                    {errors.task}
                                </div>
                            }
                        </div>
                        <div className="mt-3">
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
