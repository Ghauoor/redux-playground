import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/slices/noteSlice";

function ListNotes() {
  const notes = useSelector((state) => state.noteReducer.notes);
  const dispatch = useDispatch();
  function handleDelete(id) {
    console.log(id);
    dispatch(deleteNote(id));
  }
  return (
    <div>
      {notes.map((note) => (
        <ul key={note.id}>
          <li>{note.title}</li>
          <li>{note.desc}</li>
          <button onClick={() => handleDelete(note.id)}>delete</button>
        </ul>
      ))}
    </div>
  );
}

export default ListNotes;
