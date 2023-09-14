import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
 const navigate = useNavigate();
 const HandleNavigate = ()=>{
       navigate("/about")
 }
  return (
    <>
    <div>Contact</div>
    <button onClick={HandleNavigate}>About Page</button>
    </>
  )
}

export default Contact