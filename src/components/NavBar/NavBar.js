import React from "react";
import "./NavBar.css";

const NavBar = ({ onLogOutClick, onSetPage }) => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <a className="NavContents" href="#" onClick={onSetPage} name="1">
            일정
          </a>
        </li>
        <li>
          <a className="NavContents" href="#" onClick={onSetPage} name="2">
            설정
          </a>
        </li>
        <li>
          <a className="NavContents" href="#" onClick={onLogOutClick}>
            로그아웃
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
