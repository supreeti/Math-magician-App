import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/calculator', text: 'Calculator' },
  { path: '/fetchdata', text: 'Quotes' },
];

const Navbar = () => {
  const location = useLocation();

  const IsActive = (path) => (location.pathname === path ? { color: 'gray' } : {});

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.path} style={IsActive(link.path)}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
