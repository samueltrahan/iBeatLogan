import { Input } from 'semantic-ui-react';
import './GamePage.css';

export const WinsInput = ({ setWins, wins }) => {
  return (
    <div className="wins">
      <label htmlFor="wins">
        <div className="label">How many games did you win?</div>
        <Input
          className="wins-input"
          id="wins"
          onChange={event => setWins(event.target.value)}
          placeholder="ex: 1"
          value={wins}
        />
      </label>
    </div>
  );
};
