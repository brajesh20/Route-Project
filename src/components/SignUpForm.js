import React, { useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const SignUpForm = ({setLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [Re_Password, setRe_Password] = useState(false)

  const passwordHandler = () => {
    setShowPassword(!showPassword)
  }

  const RepasswordHandler = () => {
    setRe_Password(!Re_Password)
  }

  const changeHandler = event => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  const navigate=useNavigate()

  const submitHandler=(event)=>{
    event.preventDefault()
    if(formData.password!==formData.confirmPassword)
      {
        toast.error("Passwords do not match")
        return
      }
      
      setLoggedIn(true)
      toast.success("Account Created")
      navigate("/dashboard")
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='firstName'>
            First Name<sup>*</sup>
          </label>

          <input
            type='text'
            required
            onChange={changeHandler}
            value={formData.firstName}
            placeholder='Enter first name'
            id='firstName'
            name='firstName'
          />

          <label htmlFor='lastName'>
            Last Name<sup>*</sup>
          </label>

          <input
            type='text'
            required
            onChange={changeHandler}
            value={formData.lastName}
            placeholder='Enter last name'
            id='lasttName'
            name='lastName'
          />
        </div>

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

        <div>
          <label htmlFor='password'>
            Create Password<sup>*</sup>
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

          <label htmlFor='confirmPassword'>
            Confirm Password<sup>*</sup>
          </label>

          <input
            type={Re_Password ? 'text' : 'password'}
            required
            onChange={changeHandler}
            value={formData.confirmPassword}
            placeholder='Re-enter Password'
            name='confirmPassword'
            id='confirmPassword'
          />
          <span onClick={RepasswordHandler}>
            {Re_Password ? <IoEye /> : <IoEyeOff />}
          </span>
        </div>
        <button>Create account</button>
      </form>
    </div>
  )
}

export default SignUpForm
