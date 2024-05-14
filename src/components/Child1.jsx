import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/slices/messageSlice";

function Child1() {
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const inputText = inputRef.current.value;
    dispatch(setMessage(inputText));
  }
  const inputRef = useRef(null);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}

export default Child1;
