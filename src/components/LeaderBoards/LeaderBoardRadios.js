import { Button } from 'semantic-ui-react';
import { GAMES } from '../../constants';

export const LeaderboardRadios = ({
  currentLeaderboard,
  setCurrentLeaderboard,
}) => (
  <div className="leaderboard-radios">
    {GAMES.map(({ displayName, game }) => (
      <Button
        className={`leaderboard-radio-button ${
          currentLeaderboard === game && 'active'
        }`}
        onClick={() => {
          setCurrentLeaderboard(game);
        }}
        secondary
        type="button"
      >
        {displayName}
      </Button>
    ))}
  </div>
);
