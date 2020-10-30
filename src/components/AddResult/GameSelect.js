import { Dropdown } from 'semantic-ui-react';
import './GamePage.css';

const options = [
  { key: 'twentyOne', text: '21', value: 'twentyOne' },
  { key: 'oneOnOne', text: '1 v 1', value: 'oneOnOne' },
  { key: 'horse', text: 'HORSE', value: 'horse' },
];

export const GameSelect = ({ setGame }) => (
  <div className="game-dropdown">
    <label htmlFor="game-dropdown">
      <div className="label">Which game did you win?</div>
      <Dropdown
        id="game-dropdown"
        onChange={(event, { value }) => setGame(value)}
        options={options}
        placeholder="Select Game"
        selection
      />
    </label>
  </div>
);
