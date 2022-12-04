import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { useFetchContactsQuery } from './redux/contactsSlice';

export const App = () => {
  const { data } = useFetchContactsQuery();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList />}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};
