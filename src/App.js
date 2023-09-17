import { useContext, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

export default function App() {
      const {fetchblog} = useContext(AppContext);
      // Using useeffect to load the data.
      useEffect(()=>{
            fetchblog();
      },[])
      return (
            <>
           <Header/>
           <Pagination/>
           <Footer/>
           </>
      )  
}
