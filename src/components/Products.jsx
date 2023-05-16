import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ThemeContext } from "../ThemeContext";
import ToggleSwitch from './ToggleSwitch';

function Products() {
  const [products, setProducts] = useState([]);
  const { data, loading } = useFetch('products');


  if (loading) {
    return <div>Loading...</div>;
  }

  
  const{toggleTheme, theme} = useContext(ThemeContext); 

  return (
    <div style={{backgroundColor: theme.background, color: theme.color}}>
      <h1>Products Page</h1>
      {data.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`} style={{backgroundColor: theme.background, color: theme.color}}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
//git test dont mind me 