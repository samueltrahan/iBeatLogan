import React from "react";
import './AddGame.css'

export default function AddGame({ handleSetPlayers }) {
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
        <div>
          
        </div>
      </form>
    </>
  );
}
