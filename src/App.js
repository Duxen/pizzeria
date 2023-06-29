import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PizzaDetail from './components/PizzaDetail';
import Carrito from './components/Carrito';
import './components/styles/Styles.css';
import CartContext from './components/context/CartContext';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [totalPrecio, setTotalPrecio] = useState(0);

  return (
    <Router>
      <div>
        <CartContext.Provider value={{ carrito, setCarrito, totalPrecio, setTotalPrecio }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetail />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </CartContext.Provider>
      </div>
    </Router>
  );
};

export default App;
