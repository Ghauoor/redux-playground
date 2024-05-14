import { useSelector } from "react-redux";

function Child2() {
  const message = useSelector((state) => state.messageReducer.message);
  return <div>The Data from child one is :{message} </div>;
}

export default Child2;
