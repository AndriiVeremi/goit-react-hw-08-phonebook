import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selector';
import { deleteContact } from '../../redux/contacts/cont-operation';
import {Contact} from '../Contact/Contact';
import { Button, List, Text } from './ContactList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
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
              <Button
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </Button>
            </Contact>
          ))}
        </List>
      ) : (
        <Text>There are no contacts in your Phonebook. You can add one!</Text>
      )}
    </>
  );
};

export default ContactsList;

