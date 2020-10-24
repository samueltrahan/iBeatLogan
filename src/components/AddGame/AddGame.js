import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GamesDropDown from '../GamePage/GamesDropDown';
import DidYouWin from '../GamePage/DidYouWin';
import PickPlayerDD from '../GamePage/PickPlayerDD';
import './AddGame.css';

const isANumber = value => !Number.isNaN(Number(value));

export default function AddGame() {
  const history = useHistory();
  const [player, setPlayer] = useState('');
  const [game, setGame] = useState('');
  const [wins, setWins] = useState('');
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
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  }

  return (
    <>
      <h1 className="heading">Add a Game</h1>
      <form className="add-game-form">
        <PickPlayerDD setPlayer={setPlayer} />
        <GamesDropDown setGame={setGame} />
        <DidYouWin setWins={setWins} wins={wins} />
        <div className="submit-button">
          <button
            disabled={disabled}
            className="secondary ui button"
            type="submit"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
