import { Route ,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cart from './component/Cart';


export default function App() { 
      return (
           <div className='flex flex-col  h-[100vh]'>
           <Navbar/>
              
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/cart' element={<Cart/>}/>
              </Routes>
           </div>
      )  
}
