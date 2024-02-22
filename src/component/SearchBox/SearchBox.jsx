import React from "react";
import css from "./SearchBox.module.css";

export const SearchBox = ({ changeInput, value }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={changeInput}
        placeholder="Search"
      />
    </label>
  );
};
