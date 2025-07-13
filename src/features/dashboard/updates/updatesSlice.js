import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUpdates = createAsyncThunk(
    'updates/fetchUpdates',
    async () => {
        const res = await fetch(`/api/updates`);
        return await res.json();
    }
)

const updateSlice = createSlice({
    name: 'updates',
    initialState: {
        updates: {
            weeklySales: null,
            weeklyOrders: null,
            visitorsOnline: null
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpdates.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUpdates.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updates = action.payload.updates[0];
            })
            .addCase(fetchUpdates.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default updateSlice.reducer;