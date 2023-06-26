/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useState } from "react";

const Display = ({ person }) => {
  return (
    <div>
      <li>
        {person.name}: {person.number}
      </li>
    </div>
  );
};
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newfilter, setNewFilter] = useState("");
  const [showfilter, setshowfilter] = useState(true);

  const handlechange = (event) => {
    setNewName(event.target.value);
  };

  const handleFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const handlechangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const adder = (event) => {
    if (newName.length === 0 || newNumber.length === 0) {
      event.preventDefault();
      alert("Invalid Name or Number");
      return;
    }
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} already exists in the Phone book`);
        event.preventDefault();
        return;
      }
    }
    event.preventDefault();
    const temp = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(temp));
    setNewName("");
    setNewNumber("");
  };

  const filterpersons = showfilter
    ? persons
    : persons.filter((person) => person.name.startsWith(newfilter));

  const controlshow = (event) => {
    event.preventDefault();
    setshowfilter(!showfilter);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          Filter shown with
          <input value={newfilter} onChange={handleFilter} />
        </div>
        <button onClick={controlshow} type="submit">
          Search
        </button>
      </form>
      <h2>Add a New</h2>
      <form onSubmit={adder}>
        <div>
          Name:
          <input value={newName} onChange={handlechange} />
        </div>
        <div>
          Phone No:
          <input value={newNumber} onChange={handlechangeNumber} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {filterpersons.map((person, i) => (
          <Display key={i} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
