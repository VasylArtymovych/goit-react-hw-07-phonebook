import { useSelector, useDispatch } from 'react-redux';
import { getItems, addItem, deleteItem } from 'redux/contactsOperations';
import { changeFilterAction } from 'redux/contactsActions';

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
    dispatch(changeFilterAction(value));
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
