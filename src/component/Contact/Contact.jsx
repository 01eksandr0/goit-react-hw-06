import React from "react";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export const Contact = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <div className={css.container} id={id}>
      <ul className={css.list}>
        <li>
          <FaUser height={10} width={10} />
          {name}
        </li>
        <li>
          <FaPhone />
          {number}
        </li>
      </ul>
      <button type="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
};
