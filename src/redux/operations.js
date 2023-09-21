import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://650aa93fdfd73d1fab08a97a.mockapi.io';

// const params = {
//     headers: {
//         'Content-Type': 'application/json',
//     }
// }

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
     async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        // console.log(response.data)
      return response.data;
    } catch (e) {        
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (newContact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts",newContact);
        // console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
