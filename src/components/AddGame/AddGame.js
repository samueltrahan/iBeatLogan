import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GamesDropDown from '../GamePage/GamesDropDown';
import DidYouWin from '../GamePage/DidYouWin';
import PickPlayerDD from '../GamePage/PickPlayerDD';

import './AddGame.css';

export default function AddGame() {
  const history = useHistory();

  const handleFormSubmit = () => {
    axios.post('/formSubmit');
    history.push('/');
  };
  return (
    <>
      <h1 className="heading">Add a Game</h1>
      <form>
        <PickPlayerDD />
        <GamesDropDown />
        <DidYouWin />
        <button
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
