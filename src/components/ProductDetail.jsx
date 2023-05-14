import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

function ProductDetail() {
  
  const { id } = useParams();
  const history = useHistory();
  const { data: product, loading, error }= useFetch(`products/${id}`);
  
  const handleBack = () => {
    history.goBack();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p id='price'>{product.price}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default ProductDetail;
