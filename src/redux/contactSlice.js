import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = (state) => {
    state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
};

const handleFetchContactsFulfilled = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    state.contacts.items = action.payload;
};

const handleAddContactsFulfilled = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = null;     
    state.contacts.items.push(action.payload);        
};

const handleDeleteContactFulfilled = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    state.contacts.items = state.contacts.items
        .filter(contact => contact.id !== action.payload.id);
};

const contactSlise = createSlice({
    name: 'contacts',
    initialState: {
      contacts: {
        items: [],
        isLoading: false,
        error: null
    },
      filter: "",
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleAddContactsFulfilled)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
        .addCase(deleteContact.rejected, handleRejected),    
    reducers: {
        setContactFilter(state, action) {
            state.filter = action.payload;
        }
    }
});

export const {setContactFilter} = contactSlise.actions
export const contactReducer = contactSlise.reducer;