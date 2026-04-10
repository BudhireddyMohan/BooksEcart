import React from 'react'
import { books } from './data'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { cartdata } from '../App'

const MainPagebooks = () => {
const navg=useNavigate();
const [cart,setcart]=useContext(cartdata);

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
