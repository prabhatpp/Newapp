import React, { useState } from 'react';

const AddRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    contactNo: '',
    location: '',
    dishes: [{ name: '', description: '', price: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({
      ...restaurantData,
      [name]: value,
    });
  };

  const handleDishChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDishes = [...restaurantData.dishes];
    updatedDishes[index] = { ...updatedDishes[index], [name]: value };
    setRestaurantData({ ...restaurantData, dishes: updatedDishes });
  };

  const addDish = () => {
    setRestaurantData({
      ...restaurantData,
      dishes: [...restaurantData.dishes, { name: '', description: '', price: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/restaurants/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(restaurantData),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      alert('Restaurant added successfully!');
    } catch (error) {
      alert('Error adding restaurant: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={restaurantData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNo"
          placeholder="Contact Number"
          value={restaurantData.contactNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={restaurantData.location}
          onChange={handleChange}
          required
        />
        <div>
          <h3>Dishes</h3>
          {restaurantData.dishes.map((dish, index) => (
            <div key={index}>
              <input
                type="text"
                name="name"
                placeholder="Dish Name"
                value={dish.name}
                onChange={(e) => handleDishChange(index, e)}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Dish Description"
                value={dish.description}
                onChange={(e) => handleDishChange(index, e)}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Dish Price"
                value={dish.price}
                onChange={(e) => handleDishChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addDish}>
            Add Another Dish
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
