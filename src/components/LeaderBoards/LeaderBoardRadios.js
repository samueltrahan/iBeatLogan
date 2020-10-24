import { GAMES } from '../../constants';

export const LeaderBoardRadios = ({
  currentLeaderboard,
  setCurrentLeaderboard,
}) => (
  <div className="leaderboard-radios">
    {GAMES.map(({ displayName, game }) => (
      <button
        className={`ui secondary button leaderboard-radio-button ${
          currentLeaderboard === game && 'active'
        }`}
        onClick={() => {
          setCurrentLeaderboard(game);
        }}
        type="button"
      >
        {displayName}
      </button>
    ))}
  </div>
);
