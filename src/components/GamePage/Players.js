import React, { useState } from 'react';
import { PLAYERS } from '../../constants';

export default function Players({ handleSetPlayers }) {
  const [term, setTerm] = useState('');

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className="players">
      {PLAYERS.map(player => (
        <h4>{player}</h4>
      ))}
      <div class="ui action input">
        <input
          value={term}
          onChange={onInputChange}
          type="text"
          placeholder="Add a player..."
        ></input>
        <button
          onClick={event => handleSetPlayers(event, term)}
          class="ui button"
        >
          Add
        </button>
      </div>
    </div>
  );
}
