import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = { items: initialContacts, filter: '' };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.unshift(action.payload);
    },

    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },

    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
// Selectors
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
//Hooks
export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleAddContact = contact => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSetFilter = name => {
    dispatch(setFilter(name));
  };

  return {
    contacts,
    filter,
    addContact: handleAddContact,
    deleteContact: handleDeleteContact,
    setFilter: handleSetFilter,
  };
};
