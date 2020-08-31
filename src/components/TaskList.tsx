import React from 'react';
import cx from "classnames";
import { AiOutlineDelete } from "react-icons/ai"
import { EPriority } from "../utilities/interfaces";

interface ITaskData {
    id: string;
    task: string;
    picked: string;
}

const taskData = [
    {id: "1", task: "Low priority task zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", picked: "C"},
    {id: "2", task: "High priority task", picked: "A"},
    {id: "3", task: "Medium priority task", picked: "B"},
    {id: "4", task: "High priority task", picked: "A"},
    {id: "5", task: "High priority task", picked: "A"},
    {id: "6", task: "High priority task", picked: "A"},
    {id: "7", task: "High priority task", picked: "B"},
    // {id: "8", task: "High priority task", picked: "B"},
    // {id: "9", task: "High priority task", picked: "B"},
    // {id: "10", task: "High priority task", picked: "C"},
    // {id: "11", task: "High priority task", picked: "C"},
    // {id: "12", task: "High priority task", picked: "C"},
    // {id: "13", task: "High priority task", picked: "C"},
]

const TaskList: React.FC = () => {

    const taskElement = (picked: string) => {
        return cx("task_list_element", {
            "to-red-300 border-red-300": picked === EPriority.HIGH,
            "to-yellow-300 border-yellow-300": picked === EPriority.MEDIUM,
            "to-green-300 border-green-300": picked === EPriority.LOW,
        });
    }

    const compare = (a: ITaskData, b: ITaskData) => {
        const pickedA = a.picked;
        const pickedB = b.picked;

        let comparison = 0;
        if (pickedA > pickedB) {
            comparison = 1;
        } else if (pickedA < pickedB) {
            comparison = -1;
        }
        return comparison;
    }

    const sortedList = taskData.sort(compare);

    return (
        <div>
            <ul>
                {
                    sortedList.map(el => {
                        return <li key={el.id} className={taskElement(el.picked)} >
                            <div className="break-all max-w-90p">{el.task}</div>
                            <AiOutlineDelete className="cursor-pointer" />
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default TaskList;
