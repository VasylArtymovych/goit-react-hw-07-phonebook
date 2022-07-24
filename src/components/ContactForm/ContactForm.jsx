import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useContacts } from '../../redux';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNameId = nanoid(12);
  const inputNumberId = nanoid(12);

  const { addContact } = useContacts();

  const inputChangeHandler = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    addContact(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={submitHandler} autoComplete="off">
      <Label htmlFor={inputNameId}>Name</Label>
      <Input
        id={inputNameId}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={inputChangeHandler}
        placeholder="full name"
      />

      <Label htmlFor={inputNumberId}>Number</Label>
      <Input
        id={inputNumberId}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={inputChangeHandler}
        placeholder="tellephone number xxx-xx-xx"
      />

      <Button>Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  dispatch: PropTypes.func,
};

export default ContactForm;
