import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddGame from "./components/AddGame/AddGame";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

export default function App() {
  const [players, setPlayers] = useState([]);

  const handleSetPlayers = (event, players) => {
    event.preventDefault();
    setPlayers(players)
  }

  return (
    <Router>
      <NavBar />
      <Route exact path="/addgame" render={() => <AddGame handleSetPlayers={handleSetPlayers}/>}></Route>
    </Router>
  );
}
