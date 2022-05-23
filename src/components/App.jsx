// import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { SectionWraper } from "./Section/Section";
// import { useSelector } from "react-redux";
// import { getContacts } from "redux/itemsSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { NotifyEmptyList } from "components/Notify/Notify";

import { useFetchContactsQuery } from "redux/contacts/contactsSlice";

export const App = () => {

  const { data, error, isFetching } = useFetchContactsQuery();
  console.log(data);
  console.log(error);
  console.log(isFetching);
  // const dataLength =data.length;

  // const contactsItems = useSelector(getContacts);

  return (
    <SectionWraper>
      <>
      <ToastContainer/>
      </>
      <h1>Phonebook</h1>
      <ContactForm contacts={data}/>  
      <h2>Contacts</h2>
      {data && <Filter/>}
      {/* {dataLength > 0 && <Filter/>} */}
      {/* {dataLength > 0 ? (<ContactList/>) : <NotifyEmptyList /> */}
      {data && <ContactList contacts={data}/>}
      {/* {!data && <NotifyEmptyList/>} */}
    </SectionWraper>
  )
};