import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contactsSlice';

export const ContactList = () => {
  const { data } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter.value);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
