import React, { useEffect, useState } from 'react'
import Card from './Card';
import Spinner from './Spinner';
const url = 'https://fakestoreapi.com/products'


const Home = () => {
  const [loading,setLoading] =useState(true);
  const [post, setPost] = useState([]);

  useEffect(()=>{
      async function fetchData(){
          setLoading(true);
          try{
            const res = await fetch(url);
            const data =await res.json();
            console.log(data)
            setPost(data)
          }
          catch{
            setLoading(false)
            console.log("bro something went wrong")
            setPost([])
          }
          setLoading(false)
      }
      fetchData();
  },[])
  return (
    <div className='flex flex-wrap items-center justify-center h-[100vh]'>
    {
     loading?(<Spinner/>):(
      post?(
          post.map((item)=>(<Card id={item.id} val ={item}/>))
      ):(<div>No Data Found</div>)
     )
    }
    </div>
  )
}

export default Home