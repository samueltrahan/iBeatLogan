import React from 'react';
import './LeaderBoard.css';

export default function LeaderBoard({ horse, oneOnOne, twentyOne }) {
  return (
    <>
      <h1 className="leader-board">Leader Board</h1>
      <h1 className="twenty-one">21</h1>
      {twentyOne.map(twenty => (
        <li className="name-wins">
          {twenty.name}-{twenty.wins}
        </li>
      ))}
      <h1 className="one-v-one">1 v. 1</h1>
      {oneOnOne.map(onevone => (
        <li className="name-wins">
          {onevone.name} - {onevone.wins}
        </li>
      ))}
      <h1 className="horse">HORSE</h1>
      {horse.map(h => (
        <li className="name-wins">
          {h.name} - {h.wins}
        </li>
      ))}
    </>
  );
}
