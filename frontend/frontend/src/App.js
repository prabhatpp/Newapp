import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import Home
import FoodCars from './components/FoodCars';
import Shoplist from './components/Shoplist';
import Subscription from './components/Subscription';
import Login from './components/Login'; // Import Login component
import AboutUs from './components/AboutUs'; // Import AboutUs component
import MonthlyPrice from './components/MonthlyPrice';
import Partners from './components/Partners'; // Partners Page
import RestaurantSearch from './components/RestaurantSearch'; // Import the RestaurantSearch component
import SearchDishes from './components/SearchDishes'; // Import the SearchDishes component






const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<FoodCars />} />
        <Route path="/partners" element={<Partners />} /> {/* Partners page */}
        <Route path="/restaurant-search" element={<RestaurantSearch />} /> {/* Add the search route */}
        <Route path="/shop" element={<Shoplist />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/restaurant-search" element={<SearchDishes />} />
        <Route path="/pricing" element={<MonthlyPrice />} />
      </Routes>
    </Router>
  );
};

export default App;
