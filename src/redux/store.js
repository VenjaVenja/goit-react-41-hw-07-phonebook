import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
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

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
setupListeners(store.dispatch);
// export const persistor = persistStore(store);
