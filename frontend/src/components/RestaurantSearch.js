import React, { useState } from 'react';

const RestaurantSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/restaurants/search?search=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      setError('Failed to fetch restaurants. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Search for Restaurants</h2>
      <input
        type="text"
        placeholder="Search by restaurant name or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {restaurants.length > 0 ? (
          <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant._id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.contactNo}</p>
                <p>{restaurant.location}</p>
                <h4>Dishes:</h4>
                <ul>
                  {restaurant.dishes.map((dish, index) => (
                    <li key={index}>
                      <strong>{dish.name}</strong>: {dish.description} - ${dish.price}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No restaurants found for this search.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantSearch;
