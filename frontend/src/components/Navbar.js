import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>Home</Link>
      <Link to="/analyze" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>Analyze</Link>
      <Link to="/results" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>Results</Link>
      <Link to="/chat" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>Chat</Link>
    </nav>
  );
};

export default Navbar;