import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeaderBoard.css';

export default function LeaderBoard() {
  const [horse, setHorse] = useState([]);
  const [oneOnOne, setOneOnOne] = useState([]);
  const [twentyOne, setTwentyOne] = useState([]);

  useEffect(() => {
    const handleLeaderBoard = async () => {
      const response = await axios.get('/api/leaderboards');
      setHorse(response.data.horse.sort((a, b) => b.wins - a.wins));
      setOneOnOne(response.data.oneOnOne.sort((a, b) => b.wins - a.wins));
      setTwentyOne(response.data.twentyOne.sort((a, b) => b.wins - a.wins));
    };
    handleLeaderBoard();
  }, []);
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
