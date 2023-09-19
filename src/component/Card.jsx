import React from 'react';
import './card.css'
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from '../redux/slices/Cartslice.'

import toast from 'react-hot-toast';
const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
};
const ProductCard = (props) => {

  const { title, description, image, price, id } = props.val;
 

  const truncatedTitle = truncateString(title, 30);
  const truncatedDescription = truncateString(description, description.length / 4);
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch();


  const handleAdd = ()=>{
    console.log(cart)
      dispatch(add(props.val));
      toast.success(" Item Added to the Cart");
  }

  const handleRemove  = ()=>{
      dispatch(remove(id));
      console.log("Hey",cart)
      toast.success("Item Removed fromm the cart")
  }
  return (
    <div className="flex  flex-col justify-between m-2 w-[260px] h-[80vh] rounded overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-110">
      <div className="px-6 py-4  h-[22%] overflow-hidden">
        <div className="font-bold text-lg mb-2">{truncatedTitle}</div>
        <p className="text-gray-700 text-sm ">{truncatedDescription}</p>
      </div>

      <div className='h-[40%] w-7/12  overflow-hidden mx-auto  flex justify-center items-center'>
        <img src={image} alt={title} className='object-fill'/>
      </div>
      <div className="flex justify-center gap-5 items-center mb-5 height-[15%] ">
        <span className="text-gray-700 text-base">${price}</span>
        {    
          cart.some((p) => p.id === id) ? (
            <button className="bg-slate-700 hover:bg-white  text-white hover:text-black hover:border-slate-700 hover:border-2 font-bold py-2 px-4 rounded-full float-right duration-500" onClick={handleRemove}>
            Remove from Cart
          </button>
          ) : (
            <button className="bg-slate-700 hover:bg-white text-white  hover:text-black hover:border-slate-700 hover:border-2 font-bold py-2 px-4 rounded-full float-right duration-500" onClick={handleAdd}>
            Add to Cart
          </button>
          )
        }
      </div>
    </div>
  );
};

export default ProductCard;
