import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Footer = () => {
  const { page, totalpage, handlenextpage } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 p-1 bg-purple-500 text-black flex justify-center items-center">
      {page > 1 && (
        <button
          onClick={() => handlenextpage(page - 1)}
          className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 m-2 rounded-lg transition duration-300"
        >
          Previous
        </button>
      )}
      {page < totalpage && (
        <button
          onClick={() => handlenextpage(page + 1)}
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
