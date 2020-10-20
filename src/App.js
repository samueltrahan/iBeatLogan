import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddGame from './components/AddGame/AddGame';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import axios from 'axios';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';

export default function App() {
  const [horse, setHorse] = useState([]);
  const [oneOnOne, setOneOnOne] = useState([]);
  const [twentyOne, setTwentyOne] = useState([]);

  useEffect(() => {
    const handleLeaderBoard = async () => {
      const response = await axios.get('/leaderBoard');
      setHorse(response.data.horse.sort((a, b) => b.wins - a.wins));
      setOneOnOne(response.data.oneOnOne.sort((a, b) => b.wins - a.wins));
      setTwentyOne(response.data.twentyOne.sort((a, b) => b.wins - a.wins));
    };
    handleLeaderBoard();
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/addgame" render={() => <AddGame />} />
      </Router>
      <LeaderBoard horse={horse} oneOnOne={oneOnOne} twentyOne={twentyOne} />
    </>
  );
}
