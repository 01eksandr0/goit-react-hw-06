import React from "react";
import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </ul>
  );
};
