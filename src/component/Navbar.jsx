import React, { useState, useEffect } from 'react';
import url from '../data/logo.png';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  
  const [isCircleUp, setIsCircleUp] = useState(false);
  const cart = useSelector((state)=>state);
  
  useEffect(() => {
    // Simulate updating the cart item count and animating the badge
    const interval = setInterval(() => {
      setIsCircleUp(true);
      setTimeout(() => {
        setIsCircleUp(false);
      }, 500); // Adjust the duration of the animation as needed
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full flex flex-row justify-center bg-slate-900'>
      <div className='h-3  p-8 w-[70%] flex flex-row justify-between items-center'>
        <div>
          <Link to='/'>
            <img src={url} alt='Ecomzy' width='150px' />
          </Link>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='text-white text-2xl'>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/cart'>
              <BsCart size='1.7rem' color='white' />
            </Link>
            <span
              className={`bg-green-500 h-6 w-6 rounded-full text-white text-sm flex items-center justify-center absolute top-1 right-70 transform translate-x-1/2 transition-transform duration-500 ${
                isCircleUp ? 'translate-y-[-8px]' : ''
              }`}
            >
            {cart.cart.length}
              {/* {cartItemCount} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
