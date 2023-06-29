import { useContext } from 'react';
import pizzasData from '../pizzas.json'
import CartContext from './context/CartContext';
import { useNavigate } from 'react-router-dom';
import './styles/Styles.css'

const Carrito = () => {
    const { carrito } = useContext(CartContext);
    const navigate = useNavigate();
  
    const volverAPaginaPrincipal = () => {
      navigate('/');
    };
  
    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(pizza => {
          total += pizza.price;
        });
        return total;
      };
  
    const irAPagar = () => {
      navigate('/pago');
    };

    const obtenerImagenPizza = (pizzaId) => {
      const pizza = pizzasData.find(pizza => pizza.id === pizzaId);
      return pizza ? pizza.img : '';
    };
  
    return (
      <div className='carrito' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Carrito de Compra</h2>
        <ul>
          {carrito.map(pizza => (
            <li key={pizza.id}>
              <h3>{pizza.name}</h3>
              <img src={obtenerImagenPizza(pizza.id)} alt={pizza.name} style={{ width: '100px' }} />
              <p>Precio: ${pizza.price}</p>
            </li>
          ))}
        </ul>
        <p>Total a pagar: ${calcularTotal()}</p>
        <button className='button-pay' onClick={irAPagar}>Ir a pagar</button>
        <button className='button-home' onClick={volverAPaginaPrincipal}>Volver a la página principal</button>
      </div>
    );
  };
  
  export default Carrito;
  