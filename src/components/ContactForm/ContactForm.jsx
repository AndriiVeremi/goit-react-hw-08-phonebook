import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../../redux/contacts/cont-operation';
import { selectContacts } from '../../redux/contacts/selector';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Button } from '@mui/material';
import {
  AiOutlineUser,
  AiOutlineUserAdd,
  AiTwotonePhone,
} from 'react-icons/ai';
import { Form, Input, Label } from './ContactForm.styled';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) {
      dispatch(updateContact({ ...existingContact, number }));
      Notify.failure(`${name} this contact already exists.`);
      return;
    }
    dispatch(addContact({ name, number }));
    Notify.success(`${name} added to your list.`);
    form.reset();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <AiOutlineUser />
        Name :{' '}
        <Input
          type="text"
          id={nameId}
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <AiTwotonePhone />
        Phone :
        <Input
          type="tel"
          id={numberId}
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
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
