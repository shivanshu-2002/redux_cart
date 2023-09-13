import React from 'react'
import './all.css'
const Spinner = () => {
  return (
    <div className="spinner-container flex flex-col items-center space-y-2">
         <div className='spinner'></div>
         <p className='loading text-sky-950 text-lg font-semibold'>loading....</p>
    </div>
  )
}

export default Spinner;