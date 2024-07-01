import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, updateTaskPriority } from "../redux/tasksSlice";

const TodoItem = ({ id, title, priority }) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(deleteTask({ id: id }));
    }

    const handlePriorityChange = (e) => {
        dispatch(updateTaskPriority({ id: id, priority: e.target.value }));
    }

    return (
        <li className="task-item">
            <div>
                {title}
            </div>
            <div>
                <select value={priority} onChange={handlePriorityChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button className="remove-task-button" onClick={removeTask}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;