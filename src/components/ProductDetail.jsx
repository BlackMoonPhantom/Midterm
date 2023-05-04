import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Error</div>
  }

  return (
    <div>
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );

}

export default ProductDetail;
// test 