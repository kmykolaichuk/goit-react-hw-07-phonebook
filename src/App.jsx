import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from './redux/filtersSlice';

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onInputChange = evt => {
    dispatch(setStatusFilter(evt.currentTarget.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter onInputChange={onInputChange} filter={filter} />
      <ContactList />
    </div>
  );
}
