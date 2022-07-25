import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from 'server/serverApi';

// actionCreators
export const getItems = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const contacts = await fetchContacts();
    return contacts;
  } catch (error) {
    return error.message;
  }
});

export const addItem = createAsyncThunk('contacts/add', async data => {
  try {
    const contact = await addContact(data);
    return contact;
  } catch (error) {
    return error.message;
  }
});

export const deleteItem = createAsyncThunk('contacts/delete', async id => {
  try {
    await deleteContact(id);
    return id;
  } catch (error) {
    return error.message;
  }
});

// filterAction
export const changeFilter = createAction('contacts/filter');

// contactsHook
export const useContacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const loader = useSelector(state => state.contacts.loader);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  const getContacts = () => {
    dispatch(getItems());
  };

  const addContact = data => {
    dispatch(addItem(data));
  };

  const deleteContact = id => {
    dispatch(deleteItem(id));
  };

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  return {
    contacts,
    filter,
    loader,
    error,
    getContacts,
    addContact,
    deleteContact,
    setFilter,
  };
};
