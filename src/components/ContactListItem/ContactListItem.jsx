import { useDeleteContactMutation } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import { Item, Button } from '../ContactList/ContactList.styled';

export const ContactListItem = ({ contact }) => {
  const { name, phone, id } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = id => {
    deleteContact(id);
    toast.info(`${name} was successfully deleted`);
  };

  return (
    <Item>
      {name} : {phone}
      <Button type="button" id={id} onClick={() => handleDelete(id)}>
        {isLoading ? 'Processing...' : 'Delete'}
      </Button>
    </Item>
  );
};
