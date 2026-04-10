import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Loginpage = ({setisloggined}) => {
    const navigate=useNavigate();
  const[form,setform]=useState({username:"",
                                password:""
                               })

    const login=(e)=>{ e.preventDefault();
          if(form.username==="123" && form.password==="123"){
             localStorage.setItem("isloggined", "true")
             setisloggined(true);
            navigate('/Mainpage')
          }
    }
    const handlingdata=(e)=>{
         const{name,value}=e.target;
         setform({...form,[name]:value})
    }

    

  return (
    <div>
      <form onSubmit={login}>
        <input placeholder='username' type='text' name='username' onChange={handlingdata}/>
        <input placeholder='password' type='text' name='password' onChange={handlingdata}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Loginpage
