// SignupForm.js
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm(props) {
   const navigate = useNavigate();
   const setLogin=props.setLogin;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    signupMode: 'instructor', // Default to 'instructor'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionClick = (mode) => {
    setFormData({
      ...formData,
      signupMode: mode,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.password === formData.confirmPassword){
      setLogin(true);
      toast.success("Signin Successfull Brother!!")
      navigate('/dashboard')
    }
   else{
    setLogin(false);
    toast.error("Signin failed Brother!!")
   } 
    
    // Implement your signup logic here, using formData.signupMode
    // console.log('Signup Data:', formData);
    // console.log('Signup Mode:', formData.signupMode === 'instructor' ? 'Instructor' : 'Student');
   
  };

  return (
    <div className="w-[100%] mt-4 mb-4  text-black">
      <div className="flex w-[240px]  justify-center p-1 mb-3 text-white rounded-3xl bg-black">
        <button
          className={`${
            formData.signupMode === 'instructor' ? 'bg-blue-500 text-white' : 'bg-black'
          }  font-semibold py-2 px-4 rounded-full`}
          onClick={() => handleOptionClick('instructor')}
        >
          Instructor
        </button>
        <button
          className={`${
            formData.signupMode === 'student' ? 'bg-blue-500 text-white' : 'bg-black'
          } font-semibold py-2 px-4 rounded-full`}
          onClick={() => handleOptionClick('student')}
        >

          Student
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border p-2 w-full"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border p-2 w-full"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='password flex gap-5 w-[100%]'>
        <div className="mb-4 w-[50%]">
          <label htmlFor="password" className="block text-white mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border p-2 w-full"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 w-[50%]">
          <label htmlFor="confirmPassword" className="block text-white mb-1">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border p-2 w-full"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4  w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
