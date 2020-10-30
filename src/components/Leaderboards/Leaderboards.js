import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Leaderboard } from './Leaderboard';
import { LeaderboardRadios } from './LeaderboardRadios';
import { Loading } from '../Loading';
import './Leaderboards.css';

const sortWins = game =>
  game.filter(player => player.wins).sort((a, b) => b.wins - a.wins);

export default function Leaderboards() {
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
    return <Loading />;
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
          <Button
            secondary
            type="button"
            onClick={() => {
              history.push('/add-result');
            }}
          >
            Add Result
          </Button>
        </div>
        <LeaderboardRadios
          currentLeaderboard={currentLeaderboard}
          setCurrentLeaderboard={setCurrentLeaderboard}
        />
      </div>
      <Leaderboard players={computerLeaderboard(currentLeaderboard)} />
    </>
  );
}
