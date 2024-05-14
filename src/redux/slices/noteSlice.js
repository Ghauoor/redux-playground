import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "createNoteSlice",
  initialState: {
    notes: [],
  },
  reducers: {
    createNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, updatedNote } = action.payload;
      const index = state.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        state.notes[index] = { ...state.notes[index], ...updatedNote };
      }
    },
  },
});

export default noteSlice.reducer;

export const { createNote, deleteNote } = noteSlice.actions;
