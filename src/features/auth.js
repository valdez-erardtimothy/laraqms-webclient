import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const  attemptLogin = createAsyncThunk(
    "auth/login",
    async function({credentials}){
        let response = await axios.post('/api/login', credentials);

        return response.data;
    });

const authSlice = createSlice({
    name: "auth", 
    initialState: {
        isAuthenticated: false,
        user: null
    }, 
    extraReducers: builder=> {
        builder
            .addCase(attemptLogin.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthenticated = true;
            });
    }
    
});

export default authSlice.reducer;
