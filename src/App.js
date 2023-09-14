
import { Link, NavLink, Route ,Routes} from 'react-router-dom';
import './App.css';
import Labs from './component/Labs';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Notfound from './component/Notfound'
import MainHeader from './component/MainHeader';



export default function App() {
      return (
         <div>
         {/* Link Can be Used  */}
           {/* <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/labs">labs</Link></li>
           </ul> */}
           {/* Alternate you can use Navlink  */}
           <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink></li>
            <li> <NavLink to="/labs">labs</NavLink></li>
           </ul>

         {/* SImple Way of Creating Routes */}
                {/* <Routes>
                    <Route path='/' element={<div>HOme Page buddy </div>}/>
                    <Route path='/about' element={<div>about Page buddy </div>}/>
                    <Route path='/contact' element={<div>contect us  Page buddy </div>}/>
                    <Route path='/labs' element={<div>labs Page buddy </div>}/>
                    <Route path='*' element={<div>buddy YOu enter Some Wrong Shit man</div>}/>
                </Routes> */}
                {/* Nested Routing */}
                <Routes>
                    <Route path='/' element={<MainHeader/>}>
                       <Route index element={<Home/>}/>
                       <Route path='/about' element={<About/>}/>
                       <Route path='/contact' element={<Contact/>}/>
                       <Route path='/labs' element={<Labs/>}/>
                       <Route path='*' element={<Notfound/>}/>
                    </Route>
                </Routes>
         </div>
      )  
}
