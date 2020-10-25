import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Leaderboard } from './Leaderboard';
import './LeaderBoards.css';
import { LeaderBoardRadios } from './LeaderBoardRadios';

const sortWins = game => game.sort((a, b) => b.wins - a.wins);

export default function LeaderBoard() {
  const history = useHistory();

  const [horse, setHorse] = useState([]);
  const [oneOnOne, setOneOnOne] = useState([]);
  const [twentyOne, setTwentyOne] = useState([]);
  const [currentLeaderboard, setCurrentLeaderboard] = useState('twentyOne');

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
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  }

  if (error) {
    return <>Error! {error.message}</>;
  }

  const computerLeaderboard = () => {
    if (currentLeaderboard === 'twentyOne') {
      return twentyOne;
    }

    if (currentLeaderboard === 'oneOnOne') {
      return oneOnOne;
    }

    return horse;
  };

  return (
    <>
      <h1 className="leaderboards-header">Leaderboards</h1>
      <div className="button-controls">
        <div className="add-game-button">
          <button
            type="button"
            className="secondary ui button"
            onClick={() => {
              history.push('/add-result');
            }}
          >
            Add Result
          </button>
        </div>
        <LeaderBoardRadios
          currentLeaderboard={currentLeaderboard}
          setCurrentLeaderboard={setCurrentLeaderboard}
        />
      </div>

      <div className="leaderboard-header">
        <span>Player</span>
        <span>Wins</span>
      </div>
      <Leaderboard players={computerLeaderboard(currentLeaderboard)} />
    </>
  );
}
