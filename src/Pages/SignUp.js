import React from 'react'
import Template from '../components/Template'
import pic2 from '../assets/pic2.jpg'

const SignUp = ({setLoggedIn}) => {
  return (
    <Template
      title='Join the millions learning to code with StudyNotion for free'
      desc1='Build Skills for today, tomorrow and beyond'
      desc2='Education to future proof your career'
      image={pic2}
      formType='signup'
      setLoggedIn={setLoggedIn}
    />
  )
}

export default SignUp
