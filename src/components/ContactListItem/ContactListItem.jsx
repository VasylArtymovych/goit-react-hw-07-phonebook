import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useContacts } from '../../redux';

const ContactListItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();

  return (
    <Item>
      {name}: {number}
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
