import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './Compounds/Loginpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './Compounds/DetailsPage';
import Cartpage from './Compounds/Cartpage';
import Mainpage from './Compounds/Mainpage';
import Navbar from './Compounds/Navbar';
import { createContext } from 'react';
import UseEffect from './Useeffect/UseEffect';


export const cartdata=createContext();


function App() {
const [isloggined, setisloggined] = useState(
  localStorage.getItem("isloggined") === "true"
);

const [cart,setcart]=useState([]);
 

console.log(isloggined)
  return (
    <>
      <UseEffect/>
    <cartdata.Provider value={[cart,setcart]}>
     <Routes>
<Route 

  path="/" 
  element={
    isloggined 
      ? <Mainpage/> 
      : <Loginpage setisloggined={setisloggined}/>
  }
/>

      <Route
  path="/Mainpage"
  element={
    isloggined
      ? <Mainpage setisloggined={setisloggined} />
      : <Loginpage setisloggined={setisloggined} />
  }
/>    


    <Route path="/cart" element={<Cartpage/>}></Route>
      <Route path="/detailpage/:id"  element={<DetailsPage/>}/>
      <Route path="/navbar" element={<Navbar/>}></Route>
     </Routes>
     </cartdata.Provider>
    </>
  )
}

export default App
