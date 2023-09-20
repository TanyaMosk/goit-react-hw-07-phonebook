import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://650aa93fdfd73d1fab08a97a.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            console.log(response.data);           
            console.log('Data received:', response.data);

            return response.data;
        } catch (e) {          
            return thunkAPI.rejectWithValue(e.message);
        }
});

