import React from 'react';
import { menuData } from '../data';
import FoodCars from '../components/FoodCars';

function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="food-grid">
        {menuData.map((item) => (
          <FoodCars key={item.id} food={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
