import { useSelector } from "react-redux";
import { getFilter } from "redux/itemsSlice";
import { Contact } from 'components/Contact/Contact';
import { ContactListEl, ContactListItem } from './ContactList.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();

  const fiterItems = useSelector(getFilter);

  const filteredContactList = () => {
    const normilizFilterValue = fiterItems.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizFilterValue)
    );
  };

  return (
    <ContactListEl>
      {filteredContactList().map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <Contact
            contactId={id}
            name={name}
            number={number}
          />
        </ContactListItem>
      ))}
    </ContactListEl>
  );
};
