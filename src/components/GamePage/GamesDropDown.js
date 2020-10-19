import React from 'react';
import './GamesDropDown.css';

export default function GamesDropDown() {
  return (
    <div className="dropdown-head">
      <select class="dropdown ui dropdown">
        <option value="">Games</option>
        <option value="1">21</option>
        <option value="0">1 v 1</option>
        <option value="0">HORSE</option>
      </select>
    </div>
  );
}
