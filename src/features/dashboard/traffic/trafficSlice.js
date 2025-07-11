import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchTrafficSlice = createAsyncThunk(
    'traffic/fetchTraffic',
    async (traffic) => {
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
                state.data = action.payload;
            })
            .addCase(fetchTrafficSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default trafficSlice.reducer;