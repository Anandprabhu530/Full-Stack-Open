/* eslint-disable react/prop-types */

import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setnotes] = useState(props.notes);
  const [newnote, setnewnote] = useState("");
  const [show, setshow] = useState(true);

  const toshow = show ? notes : notes.filter((note) => note.important === true);

  const clicked = (event) => {
    event.preventDefault();
    const obj = {
      content: newnote,
      important: Math.random() < 0.5,
      id: newnote.id + 1,
    };
    setnotes(notes.concat(obj));
    setnewnote("");
  };

  const handlechange = (event) => {
    setnewnote(event.target.value);
  };
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setshow(!show)}>
          {show ? "Important" : "Show all"}
        </button>
      </div>
      <ul>
        {toshow.map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </ul>
      <form onSubmit={clicked}>
        <input value={newnote} onChange={handlechange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
