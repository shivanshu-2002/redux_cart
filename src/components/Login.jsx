import React from 'react'
import Template from './Template';
import LoginImage from '../assets/login.4d877a447365e5137b67.png';
const Login = (props) => {
    
    let setLogin = props.setLogin;
    // console.log("Hew",setLogin)
  const data = {
       heading:"Welcome Back",
       desc1:"Build skills for today, tomorrow, and beyond.",
       desc2:"Education to future-proof your career.",
       type:"Login",
       setLogin:setLogin,
       image:LoginImage
  }
  return (
    <div>
    <Template data = {data} setLogin={setLogin}/>
    </div>
  )
}

export default Login;