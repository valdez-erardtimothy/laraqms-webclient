import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const enqueue = createAsyncThunk(
    'customer/queue/enqueue',
    async function(formData) {
        let response  = await axios.post('/api/enqueue', formData);

        return response.data;
    }
);

const customerQueueSlice = createSlice({
    'name': "customer/queue",
    initialState:{},
    
}); 


export default customerQueueSlice.reducer;