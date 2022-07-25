import axios from 'axios';
axios.defaults.baseURL = 'https://62831d8b38279cef71d15bf7.mockapi.io/api/v5';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async data => {
  const response = await axios.post('/contacts', data);
  return response.data;
};

export const deleteContact = async id => {
  const response = axios.delete(`/contacts/${id}`);
  return response;
};
