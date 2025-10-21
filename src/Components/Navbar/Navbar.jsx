import React, { use } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css"
import { useState ,useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  setCartCount(cart.length);

  })
  return (
    <>
      <nav className="sticky-top navbar navbar-dark navbar-expand-lg ">
    <div className="container">
      <NavLink className="navbar-brand text-white fs-3 " to="/">E-cmmorerse App</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
          </button>
          
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link active text-white fs-4" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white fs-4" to="/Store">Store</NavLink>
          </li>
         
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
         
          <li className="nav-item">
                <NavLink className="nav-link text-white fs-5" to="/Cart"><FaCartShopping />{ cartCount}</NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
      
    </>
  )
}
