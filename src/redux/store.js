import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer';
// import contactsSliceReducer from './contactsReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export { store };
