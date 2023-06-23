/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useState } from "react";

const Display = ({ person }) => {
  return (
    <div>
      <li>{person.name}</li>
    </div>
  );
};
const App = () => {
  const [persons, setPersons] = useState([{ name: "Default User" }]);
  const [newName, setNewName] = useState("");

  const handlechange = (event) => {
    setNewName(event.target.value);
  };

  const adder = (event) => {
    if (newName.length === 0) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const temp = {
      name: newName,
    };
    setPersons(persons.concat(temp));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={adder}>
        <input value={newName} onChange={handlechange} />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) => (
          <Display key={i} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
