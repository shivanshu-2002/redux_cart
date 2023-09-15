import React, { useState } from 'react'
import logo from '../assets/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = (props) => {
        let login = props.login;
        let setLogin = props.setLogin;

  const navigate = useNavigate();
    const clickhandler = (event)=>{
         if(event.target.value == 'logout'){
          setLogin(false);
          toast.success("LogOut Successfull")
             navigate('/')
         }
         else{
           navigate(event.target.value)
         }
    }
  return (
    <div className='flex  mx-3 justify-evenly  p-3'>
    
   
      <div><NavLink to={"/"}><img src={logo} width={160} height={32} loading='lazy' /></NavLink>
      </div>
      <nav className='flex gap-3'>
        <div><NavLink to={"/login"}>Login</NavLink></div>
        <div><NavLink to={"/"}>Home</NavLink></div>
        <div><NavLink to={"/signup"}>Signup</NavLink></div>
      </nav>

      {/* Buttons */}
      <div className='flex flex-row gap-2'>
      {
      login?( <div className='flex gap-2'> {/* Wrapper-2 */}
          <button onClick={clickhandler} value={'dashboard'}>Dashboard</button>
          <button onClick={clickhandler} value={'logout'}>Logout</button>
        </div>):(  <div className='flex gap-2 '>  {/* Wrapper-1 */}
          <button onClick={clickhandler} value={'signup'}>Signup</button>
          <button onClick={clickhandler} value={'login'}>Login</button>
        </div>) 
      } 
      </div>
    

    </div>
  )
}

export default Navbar