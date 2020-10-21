import React from 'react';
import './GamesDropDown.css';

export default function GamesDropDown({ setGame }) {
  return (
    <div className="dropdown-head">
      <select
        onChange={event => setGame(event.target.value)}
        className="dropdown ui dropdown"
      >
        <option value="" selected disabled>
          Games
        </option>
        <option value="twentyOne">21</option>
        <option value="oneOnOne">1 v 1</option>
        <option value="horse">HORSE</option>
      </select>
    </div>
  );
}
