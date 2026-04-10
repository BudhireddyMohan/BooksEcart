import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { books } from './data';
import { useContext } from 'react';
import { cartdata } from '../App';

const DetailsPage = () => {
const [cart,setcart]=useContext(cartdata);

  console.log(cart);

  const addtocart=(book)=>{
    const existing = cart.find(item => item.id === book.id);
    if(existing){
      setcart(
        cart.map(item=>item.id==book.id ? {...item, qty: item.qty+1}: item)
      )
    }else{
setcart([...cart,{id:book.id, qty:1}]);
    }
    
  }



    const{id}=useParams();

    const book=books.find((b)=>b.id===parseInt(id));
  return (
    <div>
      <Navbar/>

      <h2>{book.name}</h2>
      <img src={book.image} height="150px" width="150px"/> <br/>
      <button onClick={()=>addtocart(book)}>Add to Cart</button>
    </div>
  )
}

export default DetailsPage
