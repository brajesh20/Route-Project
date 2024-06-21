import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt='logo' width={310} height={95} loading='lazy' />
      </Link>

      <nav className='nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='buttons'>
        {
          !isLoggedIn && 
          <Link to='/login'>
            <button>Login</button>
          </Link>
        }
        {
          !isLoggedIn && 
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        }
        {
          isLoggedIn && 
          <Link to='/'>
            <button onClick={()=>{
              setLoggedIn(false)
              toast.success("Loggedd Out")
            }}>Log Out</button>
          </Link>
        }
        {
          isLoggedIn && 
          <Link to='/dashboard'>
            <button>Dash Board</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
