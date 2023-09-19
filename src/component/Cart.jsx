import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Card from './Card'
import Cartitem from './Cartitem';

const Cart = () => {
  const {cart} = useSelector((state) => state);
  console.log(cart)
  const [totalAmount,setTotalAmount] = useState(0);
  
  useEffect(()=>{
       setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return (
    <div className='flex flex-row w-[100%]'>
        {
          cart.length > 0 ? (
            <div className='flex flex-row w-[100%]'>
                <div className='w-[50%] '>  
                   {
                  cart.map((item, index) => (  
                      <Cartitem val={item} id={item.id} index={index} />  
                      )
                )} 
              </div>
              <div className='flex w-[50%] flex-col justify-center h-[100vh] items-center'>
                 <div className='text-green-600 text-2xl font-bold uppercase'>Your Cart</div>
                 <div className='text-green-600 text-5xl font-bold uppercase'>Summary</div>
                 <div className='text-slate-600 mt-5 text-3xl font-bold'>Total items:{cart.length}</div>
                 <div className='text-3xl text-slate-700 mt-20'>Total Amount:{totalAmount}$</div>
                 <button className='bg-green-600 p-3 w-[90%] px-5 mt-5 rounded-md font-verdana text-3xl text-white font-bold text-center hover:text-green-600 hover:bg-white transition-[2s] hover:border-green-600 hover:border-2'>Checkout Now</button>
              </div>
             
            </div>

          )
            : (
              <div className='flex justify-center items-center flex-col w-[100vw] h-[100vh]'>
                <div className='text-3xl font-verdana'>Cart is empty!</div>
                <Link to='/' className='bg-green-600 p-3 w-[250px] mt-5 rounded-md font-verdana text-3xl text-white font-bold text-center hover:text-green-600 hover:bg-white transition-[2s] hover:border-green-600 hover:border-2'>Shop Now</Link>
              </div>
            )
        }
    </div>
  )
}

export default Cart