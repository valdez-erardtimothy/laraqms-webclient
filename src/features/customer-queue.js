import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const enqueue = createAsyncThunk(
    'customer/queue/enqueue',
    async function(formData) {
        let response  = await axios.post('/api/enqueue', formData);
        // sets cookie on success
        return response.data;
    }
);

/**
 * loads queue number based on token cookie
 */
export const loadQueueNumber = createAsyncThunk(
    'customer/queue/getQueue',
    async function() {
        let response = await axios.get('/api/get-queue-slot');

        return response.data;
    }
); 

const customerQueueSlice = createSlice({
    'name': "customer/queue",
    initialState:{
        queueData:null
    },
    extraReducers: builder => {
        builder
            .addCase(loadQueueNumber.fulfilled, (state, action) => {
                state.queueData = action.payload.customer;
            });
    }
}); 


export default customerQueueSlice.reducer;