import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import toDosReducer from "../features/toDo/toDoSlice";
import projectReducer from "../features/dashboard/projects/projectSlice";
import salesReducer from "../features/dashboard/sales/salesSlice";
import ticketReducer from "../features/dashboard/tickets/ticketSlice";
import trafficReducer from "../features/dashboard/traffic/trafficSlice";
import updatesReducer from "../features/dashboard/updates/updatesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        toDos: toDosReducer,
        projects: projectReducer,
        sales: salesReducer,
        tickets: ticketReducer,
        traffic: trafficReducer,
        updates: updatesReducer,
    }
})