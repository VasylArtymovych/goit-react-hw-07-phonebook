import { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useContacts } from 'hooks';

const ContactListItem = ({ id, name, number, createdAt }) => {
  const [currentId, setCurrentId] = useState(null);
  const { loader, deleteContact } = useContacts();

  return (
    <Item>
      {name}: {number}{' '}
      <span>created Date: {new Date(createdAt).toLocaleDateString()}</span>
      <Button
        disabled={currentId}
        onClick={() => {
          deleteContact(id);
          setCurrentId(id);
        }}
      >
        {loader && currentId ? 'Deleting...' : 'Delete'}
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
