import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-logo">
          <li>
            <a href="/">
              <img alt="" src="/images/ibeatlogan.png"></img>
            </a>
          </li>
        </div>
        <div className="nav-elements">
          <li>
            <a href="/addgame">Add a Game</a>
          </li>
        </div>
      </nav>
    </>
  );
}
