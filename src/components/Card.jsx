import React, { useState } from 'react'
import './card.css'
import Description from './Description';

const Card = (props) => {
  const dat = props.tinydata;

  const handleClick = ()=>{
      props.removefunc(props.id);
  }

  return (
    <div className='card'>
          <div className='figure'>
              <img src={dat.imageLink} alt=''/>
          </div>
          <div className='data'>
          <div className='Price'>{'\u20B9'}{dat.expenses}</div>
          <div className='Place'>{dat.name}</div>
          <div className='Description'>
            <Description daa = {dat.info}/>
          </div>
          </div>
          <div className='button' onClick={handleClick}>Not Interested</div>
    </div>
  )
}

export default Card;