import { useEffect, useState } from "react";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
const KEY = "1234";

export const App = () => {
  // states ======================================
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem(KEY)) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
    return data;
  });
  const [inputValue, setInputValue] = useState("");
  // =================================================
  const changeInput = (e) => setInputValue(`${e.target.value.trim()}`);
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [inputValue, contacts]);
  const filterContacts = () =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  const handleSubmit = (values, actions) => {
    setContacts([...contacts, { ...values, id: nanoid() }]);
    actions.resetForm();
  };
  const deleteContact = (e) => {
    setContacts(contacts.filter((item) => item.id !== e.target.id));
  };

  return (
    <>
      <h1 style={{ margin: 20 }}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox changeInput={changeInput} value={inputValue} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </>
  );
};
