import React, { useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginForm = ({setLoggedIn}) => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const passwordHandler = () => {
    setShowPassword(!showPassword)
  }

  const changeHandler = event => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  const submitHandler=(event)=>{
    event.preventDefault()
    setLoggedIn(true)
    toast.success("Logged In")

    navigate("/dashboard")

  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>
          Email Address<sup>*</sup>
        </label>

        <input
          type='email'
          required
          onChange={changeHandler}
          value={formData.email}
          placeholder='Enter email address'
          id='email'
          name='email'
        />
        <br/><br/>

        <label htmlFor='password'>
          Password<sup>*</sup>
        </label>

        <input
          type={showPassword ? 'text' : 'password'}
          required
          onChange={changeHandler}
          value={formData.password}
          placeholder='Enter Password'
          name='password'
          id='password'
        />
        <span onClick={passwordHandler}>
          {showPassword ? <IoEye /> : <IoEyeOff />}
        </span>

        <Link to='#'>
          <p>Forgot Password</p>
        </Link>

        <button>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
