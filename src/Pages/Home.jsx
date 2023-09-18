import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
const Home = () => {
  return (
    <div>
      <Header/>
      <div>
        <Pagination/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home