import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, updateTaskPriority } from "../redux/tasksSlice";
import './TodoItem.css';

const TodoItem = ({ id, title, priority }) => {
    const dispatch = useDispatch();
   
     console.log("Task ID:", id, "Title:", title, "Priority:", priority);
    const removeTask = () => {
        dispatch(deleteTask({ id: id }));
    }

    const handlePriorityChange = (e) => {
        dispatch(updateTaskPriority({ id: id, priority: e.target.value }));
    }

    return (
        <li className={`task-item task-item-${priority}`}>
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