import { Form, Button } from './ContactForm.styled';
import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const reset = () => {
    setNewName('');
    setNewPhone('');
  };
  const addNewContact = async ({ newName, newPhone }) => {
    const newContact = { name: newName, phone: newPhone };

    const isContactInList = data.find(
      contact => contact.name === newContact.name
    );

    if (!isContactInList) {
      try {
        await addContact(newContact);
        toast.success('Your contact was succesfully added!');
      } catch (error) {
        toast.error('Oops! Something went wrong. Please, try again!');
      }
    } else {
      toast.error('Your contact is already in the list!');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addNewContact({ newName, newPhone });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name{' '}
        <input
          type="text"
          name="name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number{' '}
        <input
          type="tel"
          name="number"
          value={newPhone}
          onChange={e => setNewPhone(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
