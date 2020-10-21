import React from 'react';
import './DidYouWin.css';

export default function DidYouWin() {
  return (
    <div className="input-box">
      <div className=" ui input">
        <input
          className="winner"
          type="text"
          placeholder="How many games did you win?"
        />
      </div>
    </div>
  );
}
