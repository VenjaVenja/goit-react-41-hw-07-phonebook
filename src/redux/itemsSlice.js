import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactsReduser = itemsSlice.reducer;

export const { filterContacts } = itemsSlice.actions;

export const getFilter = ({ contacts }) => contacts.filter;
