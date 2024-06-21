import React from 'react'
import Template from '../components/Template'
import pic1 from '../assets/pic1.jpg'

const Login = ({ setLoggedIn }) => {
  return (
    <Template
      title='Welcome Back'
      desc1='Build Skills for today, tomorrow and beyond'
      desc2='Education to future proof your career'
      image={pic1}
      formType='login'
      setLoggedIn={setLoggedIn}
    />
  )
}

export default Login
