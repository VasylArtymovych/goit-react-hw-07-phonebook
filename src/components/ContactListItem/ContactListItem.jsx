import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useContacts } from 'redux/contactsOperations';

const ContactListItem = ({ id, name, number, createdAt }) => {
  const { deleteContact } = useContacts();

  return (
    <Item>
      {name}: {number}{' '}
      <span>created Date: {new Date(createdAt).toLocaleDateString()}</span>
      <Button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
