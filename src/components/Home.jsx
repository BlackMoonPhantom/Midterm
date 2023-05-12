import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>My Midterm</h1>
      <h2>Home Page</h2>
      <Link to="/products">Go to Products</Link>
    </div>
  );
}

export default Home;
//test