import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
    },
    deleteContact: {
      reducer(state, aciton) {
        const index = state.findIndex(
          (contact) => contact.id === aciton.payload
        );
        state.splice(index, 1);
      },
      prepare(id) {
        return { payload: id };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
