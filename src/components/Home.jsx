import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../ThemeContext';
import { useContext, useEffect, useState } from 'react';

function Home() {

  const{toggleTheme, theme} = useContext(ThemeContext);

  return (
    <div>
      <h1 style={{backgroundColor: theme.background, color: theme.color}}>My Midterm</h1>
      <h2 style={{backgroundColor: theme.background, color: theme.color}}>Home Page</h2>
      <Link to="/products" style={{backgroundColor: theme.background, color: theme.color}}>Go to Products</Link>
    </div>
  );
}

export default Home;
//test