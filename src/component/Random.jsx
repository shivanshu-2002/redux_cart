
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

const Random = () => {
  //   const [gif,setGif] = useState('');
  //   const[isfetched,setisfetched]  =useState(false);
  // async function fetchData(){
  //        setisfetched(false);
  //        const url = `https://api.giphy.com/v1/gifs/random?api_key=iYtPRyDcN9WdvhqsEr7pWYYvkVwqw8Gy`;
  //        const {data} = await axios.get(url);
  //        const image = data.data.images.downsized_medium.url;
  //        console.log(image)
  //        setGif(image);
  //        setisfetched(true);
  //   }
  //   useEffect(()=>{
  //      fetchData();
  //   },[])
  
      const {gif,isfetched,fetchData} = useGif();
    const clickHandler = ()=>{
      fetchData()
    }
  return (
    <div className='bg-white w-[40%] rounded-md flex flex-col h-auto mt-5 justify-center items-center'>
      <div>Random Gif</div>
      {
        isfetched?(  <div className='w-[80%] h-auto flex items-center justify-center mt-2'>
      <img src={gif} alt=''/>
      </div>):(<Spinner/>)
      }
    
      <div className='bg-green-200 p-1 m-2 rounded-md w-[70%] flex items-center justify-center hover:bg-green-600' >
      <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  )
}

export default Random