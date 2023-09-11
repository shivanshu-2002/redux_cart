import { useState } from 'react';
import './App.css';
import CardArea from './components/CardArea';
import sevenWondersData from './data';


export default function App() {
     const [data,setdata] = useState(sevenWondersData);
     const removeCard = (id)=>{
         const newArr = data.filter(data1 =>data1.id!=id);
         setdata(newArr); 
     }
     const handleClick = ()=>{
           setdata(sevenWondersData);
     }

   if(data.length ==0){
      return (
         <div className="container">
          <div className="heading">
            <div className='text'>Plan With Pandey </div> 
          </div>
          <div className='empty'>
              <h1>No Tour Left!</h1>
              <button onClick={handleClick}>Referesh</button>
         </div>
     </div>
      )
     }
  return (
     <div className="container">
          <div className="heading">
            <div className='text'>Plan With Pandey </div> 
          </div>
          <div className="card_area">
             <CardArea data = {data} removefunc = {removeCard}></CardArea>
          </div>
     </div>
  )
}
