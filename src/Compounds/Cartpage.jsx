import React, { useState } from 'react'
import Navbar from './Navbar';
import { cartdata } from '../App';
import { useContext } from 'react';



const Cartpage = () => {

const [cart,setcart]=useContext(cartdata);

const removefromcart = (item) => {
  if (item.qty > 1) {
    const updatedCart = cart.map((c) =>
      c.id === item.id ? { ...c, qty: c.qty - 1 } : c
    );
    setcart(updatedCart);
  } else {
    const updatedCart = cart.filter((c) => c.id !== item.id);
    setcart(updatedCart);
  }
};

  return (
    <div>
      <Navbar/>
      <h5>Cart Page</h5>

      {cart.map( item=>
        (
            <div> <h6>item id</h6> {item.id} <h6>item quantity</h6>{item.qty}
            <button onClick={()=>removefromcart(item)}>reomve</button>
            </div>
      )
      )}
    </div>
  )
}

export default Cartpage
