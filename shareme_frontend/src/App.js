import React from 'react';
import { BrowserRouter as Router, Route, useNavigatetch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/home';


const App = () => {
  return (
    <h1 className='text-31 font-bold underline'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    </h1>
  )
}

export default App