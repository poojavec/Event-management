import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>User</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;