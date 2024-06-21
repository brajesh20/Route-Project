import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import './Template.css'

const Template = ({ title, desc1, desc2, formType, image, setLoggedIn }) => {
  return (
    <div className='templateDiv'>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formType === 'signup' ? <SignUpForm setLoggedIn={setLoggedIn} /> : <LoginForm setLoggedIn={setLoggedIn} />}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div>
        <img src={image} width={508} height={304} loading='lazy' alt='icon'/>
      </div>
    </div>
  )
}

export default Template
