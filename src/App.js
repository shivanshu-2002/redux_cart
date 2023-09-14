import { useState } from 'react';
import './App.css';


export default function App() {
       const [formData,setFormData] = useState({firstname:"",Lastname:"",email:"",isVisible:true ,mode:"",favCar:""})
       const changeHandler = (event)=>{
          const {name,value,checked,type}  = event.target;
            setFormData(prevState=>{
                  return {
                    ...prevState,
                  [name]:type==='checkbox'?checked:value    //Specially added for the checkbox
                  }
            })
       }
       const submitHandler = (event)=>{
        event.preventDefault();
             console.log("Hello bhai Ram Ram ji Sareya ne!");
             console.log(formData);
       }
      return (
        <div>
              <form className=' mt-5 flex flex-col justify-center items-center' onSubmit={submitHandler}>
                   <input type='text'
                    placeholder='Enter name'
                    name='firstname' 
                    // name should be same as specified in useState
                    onChange={changeHandler}
                    value={formData.firstname}
                    />
                    <br/>
                    <br/>
                   <input type='text'
                    placeholder='Enter Last name'
                    name='Lastname'
                    onChange={changeHandler}
                    value={formData.Lastname} //yha pe is liye add krte hai taki component ko bhi apne state ka knowledge ho
                    />
                       <br/>
                    <br/>
                   <input type='email'
                    placeholder='Enter email'
                    name='email'
                    onChange={changeHandler}
                    value={formData.email}
                    />
                    {/* CHeck box */}
                    <br/>
                    <br/>

                   <input type='checkbox'
                    name='isVisible'
                    onChange={changeHandler}
                    id='isVisible'
                    checked={formData.isVisible}
                    />
                    <label htmlFor='isVisible'>Am i Visible hon?</label>
 
                    <br/>
                    <br/>
                    {/* Radio Buttons */}
                    <input type='radio'
                    name='mode'
                    onChange={changeHandler}
                    id='Offline-mode'
                    value="Offline-mode"
                    checked={formData.mode === "Offline-mode"}
                    />
                    {/* radio num2 */}
                    <label htmlFor='Offline-mode'>Offline</label>
                    <input type='radio'
                    name='mode'
                    onChange={changeHandler}
                    id='Online-mode'
                    value="Online-mode"
                    checked={formData.mode === "Online-mode"}
                    />
                    <label htmlFor='Online-mode'>Online</label>
                      <br/>
                      <br/>
                  {/* Dropdowns... */}
                  <label htmlFor='favCar'>Tell me you fav Car bruh  </label>
                  <select onChange={changeHandler} name='favCar' value={formData.favCar} id='favCar'>
                         <option value="fortuner">fortuner</option>
                         <option value="Thar">Thar</option>
                         <option value="Range-rover">Range-rover</option>
                         <option value="Mercedes">Mercedes</option>
                  </select>

                  <br/>
                  <br/>
                  <button>Submit</button>
               </form>
        </div>
      )  
}
