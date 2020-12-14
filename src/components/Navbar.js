import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="menu">
    <div>
      Math magicians
    </div>
    <ul className="navigation">
      <li>
        <Link to="/">Home </Link>
      </li>
      <li>
        <Link to="/Calculator">| Calculator</Link>
      </li>
      <li>
        <Link to="/Quote">| Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
