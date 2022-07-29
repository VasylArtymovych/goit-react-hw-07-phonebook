import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Title } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst';
import Filter from 'components/Filter';
import { Box } from 'components/Box/Box';
import Spinner from 'components/Spinner/Spinner';
import { useContacts } from 'hooks';
import { Operations } from '../../redux';

const App = () => {
  const { contacts, filter, setFilter } = useContacts();
  const dispatch = useDispatch();
  useEffect(() => {
    // getContacts() !!! зациклює
    dispatch(Operations.getItems());
  }, [dispatch]);

  const handleFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (contacts.length !== 0) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  const filteredContacts = filterContacts();

  return (
    <Box display="flex" justifyContent="center">
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />

        <Title>Contacts</Title>
        <Box display="flex" justifyContent="space-between">
          <Filter value={filter} onChange={handleFilterInput} />
          <h3>Total contacts: {filteredContacts.length}</h3>
        </Box>

        {contacts.length === 0 ? (
          Spinner
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </Container>
    </Box>
  );
};

export default App;
