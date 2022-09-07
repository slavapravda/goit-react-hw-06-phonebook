import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/items/itemsActions';

import { getFilteredContacts } from 'redux/contacts/items/itemsSelectors';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { nanoid } from 'nanoid';
import s from './app.module.css';


const App = () => {
  const contacts = useSelector(getFilteredContacts)
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   const value = JSON.parse(localStorage.getItem('contacts'));
  //   return (
  //     value || initialContacts
  //   );
  // });

  // const [filter, setFilter] = useState('');

  // const formSubmitHandler = data => {
  //   if (contacts.find(contact => data.name === contact.name)) {
  //     return alert(`${data.name} is already in contacts.`);
  //   }

  //   setContacts(prevState => {
  //     const newContact = {
  //       ...data,
  //       id: nanoid(),
  //     };

  //     return [newContact, ...prevState];
  //   });
  // };
  const formSubmitHandler = data => {
    dispatch(addContact(data))
  };

  const onRremoveContact = id => {
    dispatch(removeContact(id))
  };

  // const filterChange = ({ target }) => {
  //   setFilter(target.value);
  // };

  // const handeFilter = () => {
  //  dispatch()
  // };


  return (
    <div className={s.section}>
      <h1 className={s.title}>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2 className={s.title}>Contacts</h2>
      <Filter/>
      <ContactList items={contacts} removeContact={onRremoveContact} />
    </div>
  );
};

export default App;
