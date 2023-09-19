import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const initialContacts = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
};

const slice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
        addContacts(state, action) {
            const checkContact = state.contacts.find(contact => contact.name === action.payload.name);
            if (checkContact) {
                alert(`${action.payload.name} is already in contacts.`);
                return state;
            }
            return {  
                ...state,
                contacts: [...state.contacts, action.payload],               
            };
        },
        deleteContacts(state, action) {
            return {    
                ...state,
                contacts: [...state.contacts.filter(contact => contact.id !== action.payload)]
            };
        },
         setContactFilter(state, action) {
            return {               
                ...state,
            filter: action.payload,
            };
        }
    }
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactReducer = persistReducer(persistConfig, slice.reducer);

export const { addContacts, deleteContacts, setContactFilter } = slice.actions;
