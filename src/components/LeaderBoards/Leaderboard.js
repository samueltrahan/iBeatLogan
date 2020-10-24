import { NAMES_DISPLAY_NAME } from '../../constants';

export const Leaderboard = ({ players }) => (
  <div className="leaderboard">
    {players.map(player => (
      <>
        <span className="leaderboard-name">
          {NAMES_DISPLAY_NAME[player.name]}
        </span>
        <span className="leaderboard-wins">{player.wins}</span>
      </>
    ))}
  </div>
);
