import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setLoggedIn]= useState(false)

  return (
    <div className='mainDiv'>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}></Route>
          <Route path='/signup' element={<SignUp setLoggedIn={setLoggedIn} />}></Route>
          <Route path='dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
