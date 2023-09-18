import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import {Route,Routes, useLocation,  useSearchParams} from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Tag from './Pages/Tag';
import Blogelem from './Pages/Blogelem';

export default function App() { 
      let [SearchParams,setSearchParams] = useSearchParams();
      let location = useLocation();
      const {fetchblog} = useContext(AppContext);
      
      // Using useeffect to load the data.
      useEffect(()=>{
            const page = SearchParams.get("page")??1;

            if(location.pathname.includes("tags")){
                  const tag = location.pathname.split('/').at(-1).replaceAll("-","");
                  fetchblog(Number(page),null,tag);
            }
            else if(location.pathname.includes("categories")){
                  const category = location.pathname.split('/').at(-1).replaceAll("-","");
                  fetchblog(Number(page),category,null);
            }
            else{
                  fetchblog(Number(page))
            }
            
      },[location.search,location.pathname])

      return (
           <div>
            <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/categories/:category' element={<Category/>}/>
                  <Route path= '/tags/:tag' element={<Tag/>}/>
                  <Route path='/blog/:blog_id' element={<Blogelem/>}/>
            </Routes>
           </div>
      )  
}
