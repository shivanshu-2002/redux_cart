import './App.css';
import { apiUrl, filterData } from "./data";
import Cards from './components/Cards';

import Filter from './components/Filter';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner'
import Navbar from './components/Navbar';

export default function App() {
      
      const [courses, setCourses] = useState(null);
      const [loading , setLoading]= useState(true);
      const [category,setCategory] = useState(filterData[0].title)
      useEffect(() => {
            
            const fetchData = async () => {
                  setLoading(true);
                  try {
                        const res = await fetch(apiUrl)
                        const data = await res.json();
                        setCourses(data.data);
                  }
                  catch {
                        toast.error("Something Went Wrong");
                  }
                  setLoading(false);
            }
            fetchData();
      }, [])
      return (
            <div className='min-h-screen flex flex-col bg-sky-900'>
                  <div>
                        <Navbar />
                  </div>
                  <div className='bg-sky-900'>
                  <div >
                  {console.log("HELlo")}
                        <Filter
                           category = {category}
                           setCategory = {setCategory}
                           filterData={filterData}
                        />
                  </div>
                  <div className='w-11/12 max-w-[1200px]
                     mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
                  {
                        loading!=true ?  (<Cards apiData={courses} category={category}/>):(<Spinner/>) 
                  }      
                  </div>
                  </div>
            </div>
      )
}
