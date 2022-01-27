import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const loadData = createAsyncThunk(
    'teller/dashboard/load',
    async function() {
        let response = await axios.get('/api/teller/dashboard');

        return response.data;
    }
);

const tellerDashboardSlice = createSlice({
    name: 'teller/dashboard',
    initialState: {
        waitlist: null,
    },
    reducers: {},
    extraReducers: builder=> {
        builder
            .addCase(loadData.fulfilled, (state, action) =>  {
                state.waitlist =  action.payload.waitlist ?? [];
            })
        ;
    }
});


export default tellerDashboardSlice.reducer;