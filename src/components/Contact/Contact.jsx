import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Name, Number, DeleteBtn, ContactItem } from './Contact.styled';

export const Contact = ({contactId, name, number }) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  const heandleRemoveContact = async (contactId) => {
    try {
      await deleteContact(contactId);
      toast.success(`${name} was removed from contacts!`)
    } catch (error) {
      console.log('ERROR')
    }
  }

  return (
    <ContactItem>
      <Name>{name}</Name>:<Number>{number}</Number>
      <DeleteBtn type="button"
        disabled={isLoading}
        onClick={()=> heandleRemoveContact(contactId)}
        >
        {isLoading ? 'Deleting...' : 'Delete'}
      </DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contactId: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
