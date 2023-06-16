import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/navigate.css';

const Navigator = () => (
  <nav className="NavBar">
    <span className="LogoText">Math Magicians</span>
    <ul className="Navigation">
      <li className="navInstance">
        <NavLink to="/" className="link">Home</NavLink>
      </li>
      <li className="navInstance">
        <NavLink to="/calculator" className="link">Calculator</NavLink>
      </li>
      <li className="navInstance">
        <NavLink to="/quotes" className="link">Quotes</NavLink>
      </li>
    </ul>
    <Outlet />
  </nav>
);

export default Navigator;
