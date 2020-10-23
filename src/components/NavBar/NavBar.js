import React from 'react';
import { useHistory } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  const history = useHistory();

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-logo">
          <div
            onKeyPress={event => {
              if (event.key === 'Enter') {
                history.push('/');
              }
            }}
            onClick={() => {
              history.push('/');
            }}
            role="button"
            tabIndex="0"
          >
            <img alt="" src="/images/ibeatlogan.png" />
            <span>iBeatLogan</span>
          </div>
        </div>
      </nav>
    </>
  );
}
