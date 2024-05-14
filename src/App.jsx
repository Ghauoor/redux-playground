// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
import CreateNotes from "./components/notes/CreateNotes";
import ListNotes from "./components/notes/ListNotes";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Child1 />
      <Child2 /> */}
      <CreateNotes />
      <ListNotes />
    </div>
  );
}

export default App;
