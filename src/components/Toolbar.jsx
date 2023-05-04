import './App.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Toolbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Toolbar;
//git test dont mind me 