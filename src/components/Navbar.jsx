import React from 'react';
import './styles/Styles.css'
import { useContext } from 'react';
import CartContext from './context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { totalPrecio } = useContext(CartContext);

  return (
    <header className="header">
    <nav className="navbar" style={{ backgroundColor: 'lightblue', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div className="logo-container">
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" alt="Pizza Logo" />
          <span className="brand-name">Pizzería Mamma Mia!</span>
        </div>
        <div className="cart-container">
          <img className="cart-icon" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Cart Icon" />
          <span className="cart-total">${totalPrecio}</span>
          <Link to="/carrito">Ver Carrito</Link>
        </div>
    </nav>
    <div className="header-content">
        <h1 className="title">¡Pizzería Mamma Mia!</h1>
        <h2 className="subtitle">¡Tenemos las mejores pizzas que podrás encontrar!</h2>
      </div>
    </header>
  );
};

export default Navbar;
