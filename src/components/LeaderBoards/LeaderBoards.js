import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Leaderboard } from './Leaderboard';
import './LeaderBoards.css';

const sortWins = game => game.sort((a, b) => b.wins - a.wins);

export default function LeaderBoard() {
  const [horse, setHorse] = useState([]);
  const [oneOnOne, setOneOnOne] = useState([]);
  const [twentyOne, setTwentyOne] = useState([]);

  const { data, error, isLoading } = useQuery('leaderboard', async () => {
    const response = await axios.get('/api/leaderboards');
    return response.data;
  });

  useEffect(() => {
    if (data) {
      setHorse(sortWins(data.horse));
      setOneOnOne(sortWins(data.oneOnOne));
      setTwentyOne(sortWins(data.twentyOne));
    }
  }, [data]);

  if (isLoading) {
    return <>Loading Spinner</>;
  }

  if (error) {
    return <>Error! {error.message}</>;
  }

  return (
    <>
      <h1 className="leader-board">Leader Board</h1>
      <h1 className="twenty-one">21</h1>
      <Leaderboard players={twentyOne} />

      <h1 className="one-v-one">1 v. 1</h1>
      <Leaderboard players={oneOnOne} />

      <h1 className="horse">HORSE</h1>
      <Leaderboard players={horse} />
    </>
  );
}
