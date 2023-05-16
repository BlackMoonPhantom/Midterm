import './App.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Toolbar from './components/Toolbar';
import { ThemeContext, themes } from './ThemeContext';
import ToggleSwitch from './components/ToggleSwitch';
import { useContext, useEffect, useState } from 'react';



function App() {

  const{toggleTheme, theme} = useContext(ThemeContext); 
  
  useEffect(()=>{
    document.body.style.background = theme.background
    }, [theme]);
  
  return (
    <Router>
      <Toolbar />
      <ToggleSwitch onToggle={toggleTheme} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
    </Router>
  );
}

export default App;
//git test dont mind me 