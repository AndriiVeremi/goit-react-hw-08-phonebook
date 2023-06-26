import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/cont-operation';
import { selectContacts } from '../../redux/contacts/selector';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from '@mui/material';
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiTwotonePhone,
} from 'react-icons/ai';
import { Form, Input, Label } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const checkName = name => {
    const newName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === newName);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!checkName(name)) {
      dispatch(addContact({ name, number }));
      Notify.success('The contact has been sent to storage');
      reset();
    } else {
      Notify.failure('Sorry, Not a unique contact');
      return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <AiOutlineUser />
        Name :{' '}
        <Input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <AiTwotonePhone />
        Phone :
        <Input
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit" variant="contained" endIcon={<AiOutlineUserAdd />}>
        Add contact
      </Button>
    </Form>
  );
}

export default ContactForm;
