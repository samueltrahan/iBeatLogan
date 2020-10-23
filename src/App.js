import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import AddGame from './components/AddGame/AddGame';
import LeaderBoards from './components/LeaderBoards/LeaderBoards';
import NavBar from './components/NavBar/NavBar';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/add-game" render={() => <AddGame />} />
        <Route exact path="/" render={() => <LeaderBoards />} />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
