import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { GameSelect } from './GameSelect';
import { Loading } from '../Loading';
import { PlayerSelect } from './PlayerSelect';
import { WinsInput } from './WinsInput';
import './AddResult.css';

const isANumber = value => !Number.isNaN(Number(value));

export default function AddGame() {
  const history = useHistory();
  const [player, setPlayer] = useState('');
  const [game, setGame] = useState('');
  const [wins, setWins] = useState('1');
  const [disabled, setDisabled] = useState(true);

  const [addResult, { isLoading }] = useMutation(
    async () => {
      const { data } = await axios.post('/api/add-result', {
        name: player,
        gameType: game,
        amount: wins,
      });
      await axios.post('/api/send-text', {
        ...data,
      });
    },
    {
      onSuccess: () => {
        history.push('/');
      },
    },
  );

  const handleFormSubmit = async event => {
    event.preventDefault();
    addResult();
  };

  useEffect(() => {
    if (player && game && isANumber(wins)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [game, player, wins]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="result-header">
        <Button
          onClick={() => {
            history.push('/');
          }}
          secondary
          type="button"
        >
          Back
        </Button>
        <h1 className="heading">Add Result</h1>
      </div>
      <form className="add-result-form">
        <PlayerSelect setPlayer={setPlayer} />
        <GameSelect setGame={setGame} />
        <WinsInput setWins={setWins} wins={wins} />
        <div className="submit-button">
          <Button
            disabled={disabled}
            onClick={handleFormSubmit}
            secondary
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
