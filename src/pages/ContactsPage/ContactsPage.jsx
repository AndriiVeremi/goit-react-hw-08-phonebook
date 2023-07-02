import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/contacts/selector';
import { fetchContacts } from '../../redux/contacts/cont-operation';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactList/ContactList';
import { Containers, Title, Subtitle } from './ContactsPage.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title>Name & Phone</Title>
      <Containers>
        <div>
          <Subtitle>Add new contact</Subtitle>
          <ContactForm />
          <Subtitle>Find contacts</Subtitle>
          <Filter />
        </div>
        <div>
          <Subtitle>Contacts list</Subtitle>
          {isLoading && !error && <b>in progress...</b>}
          <ContactsList />
        </div>
      </Containers>
    </div>
  );
}