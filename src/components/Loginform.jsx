import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Loginform(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setLogin = props.setLogin;
  console.log(setLogin)
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (event) => {
    // Implement your login logic here
       event.preventDefault();
       setLogin(true);
       toast.success("Login Successfull Brother!!")
       console.log(email,password)
       navigate('/dashboard')
  };

  return (
    <div className="w-[100%]  py-4 text-black">
      <div className="mb-4">
        <label htmlFor="email" className="block text-grey-700 ">Email:</label>
        <input
          type="email"
          id="email"
          className="border p-2 w-full"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-white mb-1">Password:</label>
        <input
          type="password"
          id="password"
          className="border p-2 w-full"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="text-right mb-4">
        <a href="/forgot-password" className="text-blue-500">Forgot Password?</a>
      </div>
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Loginform;
