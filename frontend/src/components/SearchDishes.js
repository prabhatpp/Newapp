import React, { useState, useEffect } from 'react';
import { detectLocation } from '../utils/geolocation'; // Geolocation utility
import '../styles/components/SearchDishes.css'; // Importing the component-specific styles

const SearchDishes = () => {
  const [location, setLocation] = useState('');
  const [dish, setDish] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  // Function to perform the search with location and dish parameters
  const performSearch = async (locationQuery) => {
    try {
      const query = new URLSearchParams();
      if (locationQuery) query.append('location', locationQuery); // Add location to search query
      if (dish) query.append('dish', dish); // Add dish name to search query

      const response = await fetch(`http://localhost:5000/api/restaurants/search?${query.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRestaurants(data);
    } catch (err) {
      console.error('Error fetching restaurants:', err);
      setError('Failed to fetch restaurants. Try again later.');
    }
  };

  // Automatically detect location when the component mounts
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { placeName, lat, lng } = await detectLocation(); // Get place name from geolocation API
        console.log('Detected location:', placeName);
        setLocation(placeName); // Set the location state to the place name (human-readable address)
        performSearch(placeName); // Automatically search using the detected location
      } catch (err) {
        console.error('Location detection failed:', err);
        setError('Failed to detect location. Please enable location services.');
      }
    };

    fetchLocation();
  }, []); // Run only once when the component mounts

  // Handle manual search when the user enters a dish name
  const handleSearch = () => {
    performSearch(location); // Perform search with the current location
  };

  return (
    <div className="search-section">
      <h2>Search for Tiffin Services</h2>

      {/* Dish Input */}
      <input
        type="text"
        placeholder="Enter a dish name"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
      />

      {/* Location Input (Optional) */}
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* Search Button */}
      <button onClick={handleSearch}>Search</button>

      {/* Error Handling */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Displaying the search results */}
      <div>
        {restaurants.length > 0 ? (
          <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant._id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.contactNo}</p>
                <p>Location: {restaurant.location.city}, {restaurant.location.state}</p>
                <h4>Tiffin Items:</h4>
                <ul>
                  {restaurant.tiffinItems.map((item, index) => (
                    <li key={index}>
                      <strong>{item.name}</strong>: {item.description} - ${item.price}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No restaurants found for this query.</p>
        )}
      </div>
    </div>
  );
};

export default SearchDishes;
