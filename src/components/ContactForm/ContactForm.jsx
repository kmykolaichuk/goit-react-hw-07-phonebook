import { Form, Button } from './ContactForm.styled';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const name = form.name.value;
    const phone = form.number.value;
    const newContact = {
      name,
      phone,
    };

    if (
      !data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      try {
        createContact(newContact);
        toast.success(`${name} was successfully added!`);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please, try again!');
      }
    } else {
      toast.error(`${name} is already in the list!`);
    }
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name{' '}
        <input
          type="text"
          name="name"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
