import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const Tag = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1).replaceAll("%20"," ");
  return (
    <div>
         <Header/>
         <div>
         <div className='flex justify-center align-center'>
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Back 
        </button>
        </div>
        <div className='flex justify-center align-center'>
            <h2  className='align-center text-lg'>Blogs Tagged <span className='text-2xl text-blue-800'>#{tag}</span></h2>
            </div>
         </div>
         <Pagination/>
         <Footer/>
    </div>
  )
}

export default Tag