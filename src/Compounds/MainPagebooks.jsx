import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { cartdata } from '../App'
import { useEffect } from 'react'
import { useState } from 'react'


const MainPagebooks = () => {
const navg=useNavigate();
const [cart,setcart]=useContext(cartdata);
const[books,setbooks]=useState([{id:"",name:"",image:""}])


useEffect(()=>{
    setbooks([ {
    id: 1,
    name: "React Basics",
    image: "/bookimg.webp"
  },
  {
    id: 2,
    name: "JavaScript Guide",
    image: "/bookimg.webp"
  }])
},[])

  return (
    <div>
      <h4>Books</h4>
      {books.map((b)=>(
        <div key={b.id}>
            <img src={b.image} height="150px" width="150px" 
           onClick={() => navg(`/detailpage/${b.id}`)} />
            <p>{b.name}</p>

        </div>
      ))}
    </div>
  )
}

export default MainPagebooks
