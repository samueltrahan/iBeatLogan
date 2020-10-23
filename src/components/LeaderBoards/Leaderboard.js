import { NAMES_DISPLAY_NAME } from '../../constants';

export const Leaderboard = ({ players }) => (
  <>
    {players.map(player => (
      <li className="name-wins">
        {NAMES_DISPLAY_NAME[player.name]} - {player.wins}
      </li>
    ))}
  </>
);
