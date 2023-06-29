import React from 'react';
import PizzaCatalog from './PizzaCatalog';
import PizzaDetail from './PizzaDetail';

const Home = () => {
  return (
    <div>
      <h2>Catálogo de Pizzas</h2>
      <PizzaCatalog />
      <PizzaDetail />
    </div>
  );
};

export default Home;
