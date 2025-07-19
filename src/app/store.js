import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import todosReducer from "../features/dashboard/todo/todoSlice";
import projectReducer from "../features/dashboard/projects/projectSlice";
import salesReducer from "../features/dashboard/sales/salesSlice";
import ticketReducer from "../features/dashboard/tickets/ticketSlice";
import trafficReducer from "../features/dashboard/traffic/trafficSlice";
import updatesReducer from "../features/dashboard/updates/updatesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        toDos: todosReducer,
        projects: projectReducer,
        sales: salesReducer,
        tickets: ticketReducer,
        traffic: trafficReducer,
        updates: updatesReducer,
    }
})