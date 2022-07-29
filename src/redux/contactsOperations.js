import { createAsyncThunk } from '@reduxjs/toolkit';
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
    console.log(contact);
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
