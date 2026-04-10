import React from 'react'
import Navbar from './Navbar'
import MainPagebooks from './MainPagebooks'
import { useContext } from 'react'
import { cartdata } from '../App'
const Mainpage = () => {

  const [data,setdata]=useContext(cartdata);
  return (
    <div>
      <Navbar/>
      <MainPagebooks/>
    </div>
  )
}

export default Mainpage
