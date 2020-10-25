import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import AddResult from './components/AddResult/AddResult';
import LeaderBoards from './components/LeaderBoards/LeaderBoards';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/add-result" render={() => <AddResult />} />
        <Route exact path="/" render={() => <LeaderBoards />} />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
