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

// import { Li, List } from './ContactList.styled';
// import { useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from '../../redux/contacts/selector';
// import { Contact } from '../Contact/Contact';

// const getVisibleTasks = (contacts, filter) => {
//   const normilizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact['name'].toLowerCase().includes(normilizedFilter)
//   );
// };

// const Items = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const visibleContacts = getVisibleTasks(contacts, filter);

//   return (
//     <List>
//       {visibleContacts.length > 0 ? (
//         visibleContacts.map(({ id, name, number }) => (
//           <Li key={id}>
//             <Contact id={id} name={name} number={number} />
//           </Li>
//         ))
//       ) : (
//         <h3 style={{ textAlign: 'center', marginLeft: 70 }}>
//           There are no contacts in your phonebook
//         </h3>
//       )}
//     </List>
//   );
// };

// export default Items;

//---------------------------------------------------

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchContacts,
//   deleteContact,
// } from '../../redux/contacts/contactsOperation';
// import {
//   selectFilteredContacts,
//   selectFilter,
//   selectIsLoading,
//   selectError,
// } from '../../redux/contacts/selector';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import PropTypes from 'prop-types';
// import { AiOutlineUserDelete } from 'react-icons/ai';
// import { Item, Name, Text, Button } from './ContactList.styled';

// const ContactList = () => {
//   const isLoading = useSelector(selectIsLoading);
//   const filter = useSelector(selectFilter);
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const result = useSelector(selectFilteredContacts);

//   if (isLoading && !error) {
//     return <b>Request in progress...</b>;
//   }

//   if (error) {
//     Notify.failure(error, { position: 'center-top' });
//     return <b>Error</b>;
//   }

//   const onDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };

//   const getFilteredContacts = data => {
//     if (filter.toLowerCase() && !data.length) {
//       Notify.warning('No contacts matching your request');
//     }
//     return data;
//   };

//   const filteredContacts = getFilteredContacts(result);

//   return (
//     <>
//       {filteredContacts.length ? (
//         filteredContacts.map(({ id, name, phone }) => {
//           return (
//             <Item key={id}>
//               <Name>{name} :</Name>
//               <Text>{phone}</Text>
//               <Button type="button" onClick={() => onDeleteContact(id)}>
//                 <AiOutlineUserDelete />
//                 Delete
//               </Button>
//             </Item>
//           );
//         })
//       ) : (
//         <h3 style={{ textAlign: 'center', marginLeft: 70 }}>
//           There are no contacts in your phonebook
//         </h3>
//       )}

//       {/* {filteredContacts.map(({ id, name, phone }) => {
//         return (
//           <Item key={id}>
//             <Name>{name} :</Name>
//             <Text>{phone}</Text>
//             <Button type="button" onClick={() => onDeleteContact(id)}>
//               <AiOutlineUserDelete />
//               Delete
//             </Button>
//           </Item>
//         );
//       })} */}
//     </>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
