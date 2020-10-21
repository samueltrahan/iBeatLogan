import React from 'react';
import './PickPlayerDD.css';

export default function PickPlayerDD() {
  return (
    <>
      <div className="dropdown-head">
        <select className="dropdown ui dropdown">
          <option value="">Who are you?</option>
          <option value="1">Sam Trahan</option>
          <option value="2">JP Angelle</option>
          <option value="3">Logan Sonnier</option>
          <option value="4">Cody Huval</option>
          <option value="5">Terrance Mouton</option>
          <option value="6">Alex Abushnab</option>
        </select>
      </div>
    </>
  );
}
