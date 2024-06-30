import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/problems">Problems</Link>
      <Link to="/contests">Contests</Link>
      <Link to="/status">Status</Link>
      <Link to="/rank">Rank</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
