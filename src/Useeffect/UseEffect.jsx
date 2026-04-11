import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const UseEffect = () => {

    const[data,setdata]=useState([{
                                    username:"",
                                    password:""
    }])
    
useEffect(()=>{
console.log("excuted the useeffect")
setdata([{username:"123",password:"123"}])
},[]);
    
  return (
    <div>
      <h6>useeffect hook</h6>
     {data.map((current)=>{
        return(<div>
            {current.username} {current.password}
        </div>)
     })}
    </div>
  )
}

export default UseEffect
