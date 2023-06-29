import React from 'react';
import { Link } from 'react-router-dom';
import pizzasData from '../pizzas.json';
import './styles/Styles.css';
import { useContext } from 'react';
import CartContext from './context/CartContext';

const PizzaCatalog = () => {
    const { carrito, setCarrito, totalPrecio, setTotalPrecio } = useContext(CartContext);  

    const handleComprar = (pizzaId) => {
        const pizzaSeleccionada = pizzasData.find(pizza => pizza.id === pizzaId);
        if (pizzaSeleccionada) {
          setCarrito([...carrito, pizzaSeleccionada]);
          setTotalPrecio(totalPrecio + pizzaSeleccionada.price);
          console.log(`Pizza ${pizzaSeleccionada.name} agregada al carrito`);
        }
      };

  return (
    <div className="pizza-catalog">
      {pizzasData.map(pizza => (
        <div key={pizza.id} className="pizza-card">
          <img src={pizza.img} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <ul className="ingredients">
            {pizza.ingredients.map(ingredient => (
              <li key={ingredient}>🍕{ingredient}</li>
            ))}
          </ul>
          <p>Precio: ${pizza.price}</p>
          <div className="buttons">
            <Link to={`/pizza/${pizza.id}`} className="button-link">👀 Ver más</Link>
            <button className='button-pay' onClick={() => handleComprar(pizza.id)}>🛒 Comprar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaCatalog;
