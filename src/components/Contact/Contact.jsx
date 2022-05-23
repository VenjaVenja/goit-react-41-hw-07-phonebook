import propTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Name, Number, DeleteBtn, ContactItem } from './Contact.styled';

export const Contact = ({
  contactId,
  name,
  number,
  // onDeleteContact
}) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ContactItem>
      <Name>{name}</Name>:<Number>{number}</Number>
      <DeleteBtn type="button"
        onClick={() => deleteContact(contactId)}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contactId: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  // onDeleteContact: propTypes.func.isRequired,
};
