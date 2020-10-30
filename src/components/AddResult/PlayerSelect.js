import { Dropdown } from 'semantic-ui-react';
import './GamePage.css';

const options = [
  { key: 'sam', text: 'Sam Trahan', value: 'sam' },
  { key: 'jp', text: 'JP Angelle', value: 'jp' },
  { key: 'logan', text: 'Logan Sonnier', value: 'logan' },
  { key: 'chris', text: 'Chris Leblanc', value: 'chris' },
  { key: 'cody', text: 'Cody Huval', value: 'cody' },
  { key: 'terrence', text: 'Terrence Mouton', value: 'terrence' },
  { key: 'alex', text: 'Alex Abushanab', value: 'alex' },
];

export const PlayerSelect = ({ setPlayer }) => (
  <div className="player-dropdown">
    <label htmlFor="player-dropdown">
      <div className="label">Who are you?</div>
      <Dropdown
        id="player-dropdown"
        onChange={(event, { value }) => setPlayer(value)}
        options={options}
        placeholder="Select Player"
        selection
      />
    </label>
  </div>
);
