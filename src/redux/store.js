import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import authReducer from "./authSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
        auth: authReducer
    }
});