import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selector';
import {Contact} from '../ContactItem/ContactItem';
import { List, Text } from './ContactList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {visibleContacts.length > 0 ? (
        <List>
          {visibleContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number}>
            </Contact>
          ))}
        </List>
      ) : (
        <Text>There are no contacts in your Phonebook. <br /> You can add one!</Text>
      )}
    </>
  );
};

export default ContactsList;

