import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Products() {
  const [products, setProducts] = useState([]);
  const { data, loading } = useFetch('products');

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
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