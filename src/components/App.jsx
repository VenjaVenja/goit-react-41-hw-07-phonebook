// import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { SectionWraper } from "./Section/Section";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotifyEmptyList } from "components/Notify/Notify";

import { useFetchContactsQuery } from "redux/contacts/contactsSlice";

export const App = () => {
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <SectionWraper>
      <>
      <ToastContainer/>
      </>
      <h1>Phonebook</h1>
      <ContactForm/>  
      <h2>Contacts</h2>
      {!isFetching && <Filter/>}
      {!isFetching && <ContactList/>}
      {!isFetching && data.length === 0 && <NotifyEmptyList/>}
    </SectionWraper>
  )
};