import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  return (
    <div className=' h-screen flex flex-col justify-between'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}></Route>
          <Route exact path = "/about" element={<About/>}></Route>
          <Route exact path = "/edu" element={<Education/>}></Route>
          <Route exact path = "/exp" element={<Experience/>}></Route>
          <Route exact path = "/projects" element={<Projects/>}></Route>
          <Route exact path = "/contact" element={<Contact/>}></Route>
          <Route exact path = "/resume" element={<Resume/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
