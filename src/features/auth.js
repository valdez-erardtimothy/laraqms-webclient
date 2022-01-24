import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const  attemptLogin = createAsyncThunk(
    "auth/login",
    async function({credentials}){
        let response = await axios.post('/api/login', credentials);

        return response.data;
    });

export const getAuthenticatedUser = createAsyncThunk(
    "auth/getAuthenticatedUser",
    async function() {
        let response = await axios.get('/api/get-authenticated');

        return response.data;
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async function()  {
        let response = await axios.get('/api/logout');
        
        return response;
    }
);

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
            })
            .addCase(getAuthenticatedUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(logout.fulfilled, (state)=> {
                state.user = null; 
                state.isAuthenticated = false;
            })
        ;
    }
    
});

export default authSlice.reducer;
