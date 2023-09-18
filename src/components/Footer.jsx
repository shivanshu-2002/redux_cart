import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';


const Footer = () => {
  const [cat,setcat] = useState(null);
  const [ta,setta] = useState(null);
  const { page, totalpage, handlenextpage } = useContext(AppContext);
  const location = useLocation();
 

  useEffect(()=>{
    let type = location.pathname.split('/').at(-2);
    if(type ==='categories'){
         setcat(location.pathname.split('/').at(-1));
         console.log(location.pathname.split('/').at(-1))
    }
    else if(type === 'tags'){
        setta(location.pathname.split('/').at(-1));
    }
  },[location.pathname])

  return (
    <div className="fixed bottom-0  left-0 right-0  bg-purple-500 text-black flex justify-center items-center">
      {page > 1 && (
        <button
          onClick={() => handlenextpage(page - 1,cat,ta)}
          className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 m-2 rounded-lg transition duration-300"
        >
          Previous
        </button>
      )}
      {page < totalpage && (
        <button
          onClick={() => handlenextpage(page + 1,cat,ta)}
          className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 m-2 rounded-lg transition duration-300"
        >
          Next
        </button>
      )}
      <div className="text-black">
        Page {page} of {totalpage}
      </div>
    </div>
  );
}

export default Footer;
