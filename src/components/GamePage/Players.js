import React, { useState } from 'react';

export default function Players() {
  const [term, setTerm] = useState('');
  const [players, setPlayers] = useState([]);

  const handleSetPlayers = event => {
    event.preventDefault();
    setPlayers(prev => [...prev, term]);
  };

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  return (
    <div className="players">
      {players.map(player => (
        <h4>{player}</h4>
      ))}
      <div className="ui action input">
        <input
          value={term}
          onChange={onInputChange}
          type="text"
          placeholder="Add a player..."
        />
        <button
          type="submit"
          onClick={event => handleSetPlayers(event, term)}
          className="ui button"
        >
          Add
        </button>
      </div>
    </div>
  );
}
