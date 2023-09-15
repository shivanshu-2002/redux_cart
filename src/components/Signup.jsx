import React from 'react'
import Template from './Template'
import Singup from '../assets/signup.b431d919de01b6515dd6.png'
const data = {
  heading:"Join the millions learning to code with StudyNotion for free",
  desc1:"Build skills for today, tomorrow, and beyond.",
  desc2:"Education to future-proof your career.",
  type:"Sign-up",
  image:Singup
}

const Signup = (props) => {
  const login = props.login;
  const setLogin = props.setLogin;
  return (
    <div>
      <Template data={data} login={login} setLogin={setLogin}/>
    </div>
  )
}

export default Signup