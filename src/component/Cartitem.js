import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/Cartslice.';
import toast from 'react-hot-toast';
const Cartitem = ({val,index}) => {
     let title = val.title;
     let desc = val.description;
     let price = val.price;
     let abc = val.image;

     const dispatch = useDispatch();
     const handledel = ()=>{

         dispatch(remove(val.id));
         toast.success("Successfully deleted from the cart")
     }
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex space-x-4">
        <div className="flex-none">
          <img src={abc} alt="Product" className="w-24 h-24 object-fill rounded-md" />
        </div>
        <div className="flex-grow">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-gray-500">
            {desc.split(' ').length > 60 ? (
              `${desc.split(' ').slice(0, 30).join(' ')} ...`
            ) : (
              desc
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-xl font-bold">${price}</div>
            <div>
              <button
                onClick={handledel}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <AiFillDelete size='1.75rem' />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
    )
}

export default Cartitem