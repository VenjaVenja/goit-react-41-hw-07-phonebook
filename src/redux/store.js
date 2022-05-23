import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './itemsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactApi } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
