import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToDos = createAsyncThunk(
    'toDos/fetchToDos',
    async (todo) => {
        const res = await fetch(`/api/todos`);
        return await res.json();
    }
)

const toDoSlice = createSlice({
    name: 'toDos',
    initialState: {
        data: null,
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
    }
})

export default toDoSlice.reducer;