import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FoodCars from './components/FoodCars';
import Shoplist from './components/Shoplist';
import Subscription from './components/Subscription';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import MonthlyPrice from './components/MonthlyPrice';
import Partners from './components/Partners';
import RestaurantSearch from './components/RestaurantSearch';
import SearchDishes from './components/SearchDishes';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <FoodCars />
          </>
        } />

        <Route path="/partners" element={<Partners />} />
        <Route path="/restaurant-search" element={<RestaurantSearch />} />
        <Route path="/shop" element={<Shoplist />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-dishes" element={<SearchDishes />} />
        <Route path="/pricing" element={<MonthlyPrice />} />
      </Routes>
    </Router>
  );
};

export default App;
