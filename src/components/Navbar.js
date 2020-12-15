import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="menu" id="navbar">
    <div>
      Math magicians
    </div>
    <ul className="navigation">
      <li>
        <Link to="/" id="home">Home </Link>
      </li>
      <li>
        <Link to="/Calculator" id="calculator">| Calculator</Link>
      </li>
      <li>
        <Link to="/Quote" id="quote">| Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
