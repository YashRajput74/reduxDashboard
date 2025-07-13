import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrafficSlice = createAsyncThunk(
    'traffic/fetchTraffic',
    async () => {
        const res = await fetch(`/api/traffic`);
        return await res.json();
    }
)

const trafficSlice = createSlice({
    name: 'traffic',
    initialState: {
        data: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrafficSlice.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTrafficSlice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.traffics;
            })
            .addCase(fetchTrafficSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default trafficSlice.reducer;