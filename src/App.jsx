/* eslint-disable react/prop-types */
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const votes = [0, 0, 0, 0, 0, 0, 0, 0];
  const [selected, setSelected] = useState(0);
  const [vote, setvote] = useState(votes);
  const randomizer = () => {
    var random_value = Math.floor(Math.random() * anecdotes.length);
    while (anecdotes[random_value] === anecdotes[random_value - 1]) {
      random_value = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(random_value);
  };
  const voting = () => {
    const arr = [...vote];
    arr[selected] += 1;
    setvote(arr);
  };
  return (
    <div>
      <b>Anecdotes of the day</b>
      <div>
        {anecdotes[selected]} has {vote[selected]} votes
      </div>
      <div>
        <button onClick={randomizer}>Randon anecdotes</button>
        <button onClick={voting}>Vote</button>
      </div>
      <b>Anecdotes with most votes</b>
      <Maxvotes anecdotes={anecdotes} vote={vote} />
    </div>
  );
};

const Maxvotes = ({ anecdotes, vote }) => {
  const mostvote = Math.max(...vote);
  const maxindex = vote.indexOf(mostvote);
  const out = anecdotes[maxindex];
  if (mostvote === 0) {
    return <div>No Votes Yet</div>;
  }
  return (
    <div>
      {out} has {mostvote} votes.
    </div>
  );
};
export default App;
