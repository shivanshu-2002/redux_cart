import React, { useState } from 'react'
import dataVal from '../data'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Image from './Image';
const Card = () => {
    // let n = dataVal.length();
    let n = 5;
     const[index,setIndex] = useState(0);
     const handleIncrease = ()=>{
           setIndex((index+1)%n);
     }
     const handleDecrease =()=>{
           if(index ==0)setIndex(n-1);
           else setIndex(index-1);
     }
     
     const randomHandler = ()=>{
        console.log(Math.floor(Math.random() * (5)))
           setIndex(Math.floor(Math.random() * (5)));
     }
    return (
        <div className='parent bg-white w-[45%] h-[70%] rounded-lg shadow-xl'>
            <Image url={dataVal[index].imageUrl} />
            <div className='flex flex-col items-center justify-center'>

                <div className='text-xl font-verdana font-bold'>{dataVal[index].name}</div>

                <div className='text-slate-500 text-xs'>{dataVal[index].title}</div>

                <div className='m-3 '>
                    <FaQuoteLeft />
                </div>

                <div className='flex flex-col items-center justify-center '>
                <div className='w-[75%]'>{dataVal[index].message}</div>
                </div>

                <div className='m-2'>
                    <FaQuoteRight />
                </div>

                <div className='flex mt-2 text-3xl text-violet-500 font-bold text-center'>
                    <button  className='cursor-pointer  hover:text-violet-800' onClick={handleDecrease}>
                        <FiChevronLeft/>
                    </button>
                    <button className='cursor-pointer  hover:text-violet-800' onClick={handleIncrease}>
                    <FiChevronRight/>
                    </button>
                </div>
                <div className='p-2 mt-4 bg-purple-400 w-[30%] flex justify-center items-center rounded-md hover:bg-purple-500'>
                    <button className='text-white text-lg font-bold' onClick={randomHandler}>
                        Surprise Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card