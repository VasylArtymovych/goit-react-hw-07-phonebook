import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number, createdAt }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          createdAt={createdAt}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
