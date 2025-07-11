import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({//create a slice
    name: 'auth',//name of slice in store
    initialState: { isLoggedin: true, user: null },//will set defaults in the store for auth object
    reducers: {//functions to tell redux how to change state
        login: (state, action) => {//a reducer function to tell store what is changing 'state' and gives payload optionally with it, also the type is generally store in this way: 'auth/login' inside action object: action: { type: 'auth/login', payload: { name: "John" } }
            state.isLoggedin = true;
            state.user = action.payload;//actions payload
        },
        logout: (state, action) => {
            state.isLoggedin = false;
            state.user = null;
        }
    }
})

export const { login, logout } = authSlice.actions;//goes to components
export default authSlice.reducer;//goes to store so that store can identify what to do when dispatch is called