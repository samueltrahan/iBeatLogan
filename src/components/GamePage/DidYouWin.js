import React from 'react';
import './DidYouWin.css';

export default function DidYouWin({ setWins }) {
  return (
    <div className="input-box">
      <div className=" ui input">
        <input
          onChange={event => setWins(event.target.value)}
          className="winner"
          type="text"
          placeholder="How many games did you win?"
        />
      </div>
    </div>
  );
}
