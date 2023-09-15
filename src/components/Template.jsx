import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import Loginform from './Loginform'
import Signupform from './Signupform'
import frameurl from '../assets/frame.3a238e5f26d676376e1d.png'

const Template = (props) => {
    const data = props.data;
    const setLogin = data.setLogin;
    console.log(setLogin)
    return (
        <div className='flex justify-evenly  p-5  '>
            {/* form */}
            <div className='h-[80vh] w-[35%]   text-white flex flex-col text-bold p-5'>
                <div className='text-3xl p-5'>{data.heading}</div>
                <div className='text-xl text-white'>{data.desc1} <div className='text-sky-500 italic'>{data.desc2}</div></div>
               
               {
                data.type==="Login"?
                    <Loginform setLogin={setLogin}/>:(<Signupform setLogin={setLogin}/>)
               }
                
               

                <div className='flex items-center mb-3'>
                    <div className='flex-grow h-px bg-white mx-4'></div>
                    <div className='text-white font-bold'>or</div>
                    <div className='flex-grow h-px bg-white mx-4'></div>
                </div>


                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 ">
                    <FcGoogle size={24} /> {/* Adjust the icon size as needed */}
                    {data.type} with Google
                </button>

            </div>
            {/* Image */}
            <div className="relative mt-8">
      <img src={frameurl} alt="Inner" width={418} height={400} className="rounded-md h-auto" />
      <img
        src={data.image}
        alt="Outer"
        width={418}
        className="rounded-md absolute top-[-16px] left-[-16px]"
      />
    </div>
        </div>
    )
}

export default Template