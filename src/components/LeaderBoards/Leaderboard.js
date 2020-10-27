import { EmptyLeaderboard } from './EmptyLeaderboard';
import { NAMES_DISPLAY_NAME } from '../../constants';

export const Leaderboard = ({ players }) => {
  if (players.length) {
    return (
      <>
        <div className="leaderboard-header">
          <span>Player</span>
          <span>Wins</span>
        </div>
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
      </>
    );
  }
  return <EmptyLeaderboard />;
};
