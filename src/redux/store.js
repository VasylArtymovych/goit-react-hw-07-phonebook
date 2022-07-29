import { configureStore } from '@reduxjs/toolkit';
import contactsSliceReducer from './contactsReducer';
// import { contactsReducer } from './contactsReducer';

const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export { store };
