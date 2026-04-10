import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MainPagebooks from './MainPagebooks'
import Mainpage from './Mainpage'
import { useContext } from 'react'
import { cartdata } from '../App'

const Navbar = () => {

  const logout = () => {
  localStorage.removeItem("isloggined");
  setisloggined(false);
  navigate("/");
};
  const [cart,setcart]=useContext(cartdata);

  return (
    <nav style={{
      borderBottom: "2px solid black", // Changed to bottom border for a cleaner look
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      alignItems: "center",
      position: "fixed",    // Sticks it to the viewport
      top: 0,               // Forces it to the very top
      left: 0,              // Ensures it starts from the left edge
      width: "100%",        // Spans the full width
      zIndex: 1000          // Keeps it above other elements
      
    }} >
      <Link to="/"><h3 style={{ margin: 1 }}>Book Store</h3></Link>
      <Link to="/cart"><h3 style={{ margin: 1 }}>Cart({cart?.length || 0})</h3></Link>
      <h4 style={{ margin: 1 }}><button onClick={logout}>Logout</button></h4>
    </nav>
  )
}

export default Navbar
