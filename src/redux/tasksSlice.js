import { createSlice } from "@reduxjs/toolkit";


const loadTasksFromStorage = () => {
  try {
    const serializedTasks = localStorage.getItem('tasks');
    if (serializedTasks === null) {
      return [];
    }
    return JSON.parse(serializedTasks);
  } catch (err) {
    console.error("Error loading tasks from localStorage:", err);
    return [];
  }
};


const saveTasksToStorage = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedTasks);
  } catch (err) {
    console.error("Error saving tasks to localStorage:", err);
  }
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: loadTasksFromStorage(),
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                name: action.payload.task,
                priority: action.payload.priority || "Medium"
            }
            state.push(newTask);
            saveTasksToStorage(state);
        },
        deleteTask: (state, action) => {
            const newState = state.filter((item) => item.id !== action.payload.id);
            saveTasksToStorage(newState);
            return newState;
        },
        updateTaskPriority: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.priority = action.payload.priority;
                saveTasksToStorage(state);
            }
        }
    }
});

export const { addTask, deleteTask, updateTaskPriority } = tasksSlice.actions;

export default tasksSlice.reducer;