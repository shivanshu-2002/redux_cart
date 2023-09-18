import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Card = (props) => { 
  const data = props.card;
  
  
  return (
    <div className="bg-white rounded-lg  overflow-hidden transition transform  hover:shadow-lg">
     
      <div className="px-6 py-4 text-sm">
       <NavLink to={`/blog/${data.id}`}>  <div className="font-bold text-xl mb-2">{data.title}</div></NavLink>
      
        <div>By <span className='italic'>{data.author}</span>  On  
        <NavLink to={`/categories/${ data.category}`} className='underline font-bold'> {data.category.replaceAll("-"," ")}</NavLink> 
         </div>
        <div>Posted on {data.date}</div>
        <p className="text-gray-700 text-base">{data.content}</p>
      </div>
      <div className="px-6 py-2">
        <div className="mt-2"> {/* Added margin to the tag section */}
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-200 rounded-full px-2 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2"
            >
            <NavLink to={`/tags/${tag.replaceAll("-"," ")}`}>
            #{tag}
            </NavLink>
             
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
