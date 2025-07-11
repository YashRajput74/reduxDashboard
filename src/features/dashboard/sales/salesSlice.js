import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchSales = createAsyncThunk(
    'sales/fetchSales',
    async (sales) => {
        const res = await fetch(`/api/sales-data`);
        return await res.json();
    }
)

const salesSlice = createSlice({
    name: 'sales',
    initialState: {
        salesData: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSales.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSales.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.salesData = action.payload;
            })
            .addCase(fetchSales.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default salesSlice.reducer;