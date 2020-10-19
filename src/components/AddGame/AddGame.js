import React, { useState } from "react";
import { PLAYERS } from "../../constants";
import GamesDropDown from '../GamePage/GamesDropDown'
import "./AddGame.css";

export default function AddGame({ handleSetPlayers, players }) {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <>
      <h1 className="heading">Add a Game</h1>
      <form>
        <GamesDropDown />
        <div className="players">
          {PLAYERS.map((player) => (
            <h4>{player}</h4>
          ))}
          <div class="ui action input">
            <input
              value={term}
              onChange={onInputChange}
              type="text"
              placeholder="Add a player..."
            ></input>
            <button
              onClick={(event) => handleSetPlayers(event, term)}
              class="ui button"
            >
              Add
            </button>
          </div>
        </div>
        <div className="checkbox">
        <div class="ui checkbox">
          <input type="checkbox" name="example"></input>
          <label>Did you beat Logan?</label>
        </div>
        </div>
      </form>
    </>
  );
}
