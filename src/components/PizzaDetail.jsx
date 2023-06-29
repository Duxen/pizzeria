import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pizzasData from '../pizzas.json';
import './styles/Styles.css'

const PizzaDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const pizza = pizzasData.find(pizza => pizza.id === id);

  const volverAPaginaPrincipal = () => {
    navigate('/');
  };

  if (!pizza) {
    return <div>No se encontró la pizza</div>;
  }

  return (
    <div className="pizza-detail">
      <div className="pizza-image">
        <img src={pizza.img} alt={pizza.name} />
      </div>
      <div className="pizza-description">
        <h1>{pizza.name}</h1>
        <p>Descripción: {pizza.desc}</p>
        <li>Ingredientes: 🍕{pizza.ingredients.join(', ')}</li>
        <h3>Precio: ${pizza.price}</h3>
        <button className='button-home' onClick={volverAPaginaPrincipal}>Volver a la página principal</button>
      </div>
    </div>
  );
};

export default PizzaDetail;
