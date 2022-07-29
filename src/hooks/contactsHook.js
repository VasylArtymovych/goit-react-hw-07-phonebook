import { useSelector, useDispatch } from 'react-redux';
import { getItems, addItem, deleteItem } from 'redux/contactsOperations';
import { changeFilter } from 'redux/contactsReducer';
// import { changeFilterAction } from 'redux/contactsActions';

// contactsHook
export const useContacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const loader = useSelector(state => state.contacts.loader);
  const addLoader = useSelector(state => state.contacts.addLoader);
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
    addLoader,
    error,
    getContacts,
    addContact,
    deleteContact,
    setFilter,
  };
};
