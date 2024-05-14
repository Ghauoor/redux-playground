import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/slices/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const formRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createNote({
        title,
        desc,
        id: nanoid(2),
      })
    );
    formRef.current.reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          placeholder="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description Here"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateNotes;
