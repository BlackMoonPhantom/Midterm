import { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { ThemeContext, themes } from '../ThemeContext';

function ProductDetail() {

  const{toggleTheme, theme} = useContext(ThemeContext); 
  
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
    <div >
      <h2 style={{backgroundColor: theme.background, color: theme.color}}>{product.title}</h2>
      <img src={product.image} alt={product.name} />
      <p style={{backgroundColor: theme.background, color: theme.color}}>{product.description} </p>
      <p id='price' style={{backgroundColor: theme.background, color: theme.color}}>{product.price}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default ProductDetail;
