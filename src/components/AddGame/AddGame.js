import React, { useState } from "react";
import GamesDropDown from '../GamePage/GamesDropDown';
import Players from '../GamePage/Players'
import DidYouBeatLogan from '../GamePage/DidYouBeatLogan'
import "./AddGame.css";

export default function AddGame({ handleSetPlayers, players }) {
  

 

  return (
    <>
      <h1 className="heading">Add a Game</h1>
      <form>
        <GamesDropDown />
       <Players handleSetPlayers={handleSetPlayers}/>
        <DidYouBeatLogan />
      </form>
    </>
  );
}
