import React, { useEffect, useState } from 'react';
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

  const handleFormSubmit = async event => {
    event.preventDefault();
    await axios.post('/api/add-result', {
      name: player,
      gameType: game,
      amount: wins,
    });
    history.push('/');
  };

  useEffect(() => {
    if (player && game && isANumber(wins)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [game, player, wins]);

  return (
    <>
      <h1 className="heading">Add a Game</h1>
      <form>
        <PickPlayerDD setPlayer={setPlayer} />
        <GamesDropDown setGame={setGame} />
        <DidYouWin setWins={setWins} wins={wins} />
        <button
          disabled={disabled}
          className="negative ui button"
          type="submit"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
