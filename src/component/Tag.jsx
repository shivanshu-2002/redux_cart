import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';


const Tag = () => {
    // const [gif,setGif] = useState('');
    const [tag,setTag]  =useState('')
    // const[isfetched,setisfetched]  =useState(false);
  // async function fetchData(){
  //        setisfetched(false);
  //        const url = `https://api.giphy.com/v1/gifs/random?api_key=iYtPRyDcN9WdvhqsEr7pWYYvkVwqw8Gy&tag=${tag}`;
  //        const {data} = await axios.get(url);
  //        const image = data.data.images.downsized_medium.url;
  //        console.log(image)
  //        setGif(image);
  //        setisfetched(true);
  //   }
  //   useEffect(()=>{
  //      fetchData();
  //   },[])
    const {gif,isfetched,fetchData} = useGif(tag);
    const clickHandler = ()=>{
      fetchData(tag)
    }
    const changeHandler = (event)=>{
        setTag(event.target.value);
    }
  return (
    <div className='bg-white w-[40%] rounded-md flex flex-col h-auto mt-5 justify-center items-center'>
      <div>{tag} Gif</div>
      {
        isfetched?(  <div className='w-[80%] h-auto flex items-center justify-center mt-2'>
      <img src={gif} alt=''/>
      </div>):(<Spinner/>)
      }

      <input name='tag' value={tag} className='bg-grey-300 p-1 m-2 rounded-md w-[70%]' onChange={changeHandler}/>
    
      <div className='bg-green-200 p-1 m-2 rounded-md w-[70%] flex items-center justify-center hover:bg-green-600' >
      <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  )
}

export default Tag