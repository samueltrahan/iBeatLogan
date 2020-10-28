import { BiBasketball } from 'react-icons/bi';

export const EmptyLeaderboard = () => (
  <div className="empty-leaderboard">
    <span className="empty-icon">
      <BiBasketball />
    </span>
    <span className="empty-text">
      <div>Nothing here yet!</div>
      <div>Go forth and beat Logan.</div>
    </span>
  </div>
);
