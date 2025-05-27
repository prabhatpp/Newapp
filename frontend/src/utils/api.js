const API_BASE_URL = 'http://localhost:5000/api'; // Base URL for your backend

export const fetchRestaurants = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/search?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export const addRestaurant = async (restaurantData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurantData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding restaurant:', error);
    throw error;
  }
};
