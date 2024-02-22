import React from "react";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { getContacts, getFilters } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const filterContacts = () =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul className={css.list}>
      {filterContacts().map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
