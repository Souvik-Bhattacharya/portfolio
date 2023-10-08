import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <div className=' h-screen flex flex-col justify-between'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
