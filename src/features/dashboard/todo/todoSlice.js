import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToDos = createAsyncThunk(
    'toDos/fetchToDos',
    async () => {
        const res = await fetch(`/api/todos`);
        const data = await res.json();
        return data.todos;
    }
);

export const addToDo = createAsyncThunk(
    'toDos/addToDos',
    async (newToDo) => {
        const res = await fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newToDo),
        });
        const data = await res.json();
        if(!data.id){
            throw new Error("Failed to add a task");
        }
        return data
    }
);

export const toggleToDoStatus = createAsyncThunk(
    'todos/toggleToDoStatus',
    async (toDoId) => {
        const res = await fetch(`/api/todos/${toDoId}`);
        const todo = await res.json();
        
        const updatedTodo = {
            ...todo,
            completed: !todo.completed,
        };
        
        const patchRes = await fetch(`/api/todos/${toDoId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo),
        });
        
        return await patchRes.json();
    }
);

export const deleteToDo = createAsyncThunk(
    'toDos/deleteToDo',
    async (toDoId) => {
        const res = await fetch(`/api/todos/${toDoId}`, {
            method: 'DELETE'
        });
        return toDoId;
    }
)

const todoSlice = createSlice({
    name: 'toDos',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},//we use this to change synchronus states
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchToDos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchToDos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addToDo.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(toggleToDoStatus.fulfilled, (state, action) => {
                const updatedToDo = action.payload;
                const index = state.data.findIndex(todo => todo.id === updatedToDo.id);
                if (index !== -1) {
                    state.data[index] = updatedToDo;
                }
            })
            .addCase(deleteToDo.fulfilled,(state,action)=>{
                state.data = state.data.filter(toDo=>toDo.id !==action.payload)
            })
    }
})

export default todoSlice.reducer;