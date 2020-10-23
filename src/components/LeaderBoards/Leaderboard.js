import React from 'react';

export const Leaderboard = ({ players }) => (
  <>
    {players.map(player => (
      <li className="name-wins">
        {player.name} - {player.wins}
      </li>
    ))}
  </>
);
