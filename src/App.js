import './App.css';
import Random from './component/Random.jsx'
import Tag from './component/Tag'
export default function App() {
      return (
        <div class="w-[100vw] h-auto bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-opacity-50 flex items-center flex-col">
         <div className='bg-white p-2 mt-4 w-[80%] flex justify-center items-center text-3xl font-bold rounded-md'>
         <h1>Random Gifs</h1></div>
         
         {/* Box1 */}
         <Random/>
         {/* Box2 */}
         <Tag/>

</div>  
      
      )  
}
