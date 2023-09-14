import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
    const handleNavigate  = ()=>{
          navigate("/contact")
    }
    const handleBack  = ()=>{
          navigate(-1);
    }
  return (
    <>
    <div>Home</div>
    <button onClick={handleNavigate}>Bhai Contact pe ja na</button>
    <button onClick={handleBack}>Go Back buddy</button>
    </>
    
  )
}

export default Home