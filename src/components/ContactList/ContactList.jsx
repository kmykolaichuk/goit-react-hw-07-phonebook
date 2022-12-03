import { Item, Button } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import toast from 'react-hot-toast';

const ContactList = () => {
  const deleteContactId = async id => {
    try {
      await deleteContact(id);
      toast.success(`Contact deleted `);
    } catch (error) {
      toast.error('Oops! Something went wrong. Please, try again!');
    }
  };

  const visibleContacts = (contacts, filter) => {
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filter = useSelector(state => state.filter);

  const { data: contacts = [] } = useFetchContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const contactsList = visibleContacts(contacts, filter);

  return (
    <ul>
      {contactsList ? (
        <>
          {contactsList.map(contact => (
            <Item key={contact.id}>
              {contact.name}: {contact.phone}
              <Button type="button" onClick={() => deleteContactId(contact.id)}>
                {isLoading ? 'Processing...' : 'Delete'}
              </Button>
            </Item>
          ))}
        </>
      ) : null}
    </ul>
  );
};

export default ContactList;
