import './App.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Toolbar from './components/Toolbar';


function App() {
  return (
    <Router>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;