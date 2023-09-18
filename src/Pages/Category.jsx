import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Category = () => {
 
  const navigate = useNavigate();
  const location = useLocation();
  const handleCLick = ()=>{
       navigate(-1);
  }
  const category = location.pathname.split('/').at(-1).replaceAll("%20"," ");
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center'>
      <button
        onClick={handleCLick}
        className="bg-purple-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded text-center mt-5 m-3"
      >
        Back
      </button>
      <h1>Blogs on <span className='text-2xl '>{category}</span></h1>
      </div>
      <Pagination />
      <Footer/>
    </div>
  );
  
}

export default Category