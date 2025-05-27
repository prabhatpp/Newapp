import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/components/Navbar.css'; // Import Navbar-specific styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Tiffin Service</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/subscription">Subscription</Link>
        <Link to="/about">About Us</Link>
        <Link to="/partners">Partners</Link> {/* Link to Partners page */}
        <Link to="/restaurant-search">Restaurant Search</Link> {/* Link to Restaurant Search */}
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
