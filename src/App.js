import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route ,Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';

export default function App() {
     const [login, setLogin ] = useState(false);
      return (
         <div className='bg-sky-950 w-[100vw] h-[150vh] text-white'>
              <Navbar login = {login} setLogin = {setLogin}/>
              
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/login' element={<Login login = {login} setLogin = {setLogin}/>}/>
                  <Route path='/signup' element={<Signup login = {login} setLogin = {setLogin}/>}/>
                  <Route path='/dashboard' element={<Dashboard/>}/>
              </Routes>
         </div>
      )  
}
