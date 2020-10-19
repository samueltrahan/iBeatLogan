import React from 'react';

export default function DidYouBeatLogan() {
  return (
    <div className="checkbox">
      <div className="ui checkbox">
        <label htmlFor="logan-checkbox">
          <input id="logan-checkbox" type="checkbox" name="example" />
          Did you beat Logan?
        </label>
      </div>
    </div>
  );
}
