import React, { useState } from "react";
import { PLAYERS } from "../../constants";
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
        <div className="dropdown-head">
          <select class="dropdown ui dropdown">
            <option value="">Games</option>
            <option value="1">21</option>
            <option value="0">1 v 1</option>
            <option value="0">HORSE</option>
          </select>
        </div>
        <div className="players">
          {PLAYERS.map((player) => (
            <h4>player</h4>
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
