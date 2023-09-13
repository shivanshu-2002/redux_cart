import React from 'react'

const Image = (props) => {
  return (
    <div className='bg-purple-500 w-[25%] h-[34%] rounded-[50%] ml-7 mt-[-65px] '>
    <img src={props.url} alt="not_found" className=' w-[95%] h-[99%] rounded-[50%] '/>
</div>
  )
}

export default Image