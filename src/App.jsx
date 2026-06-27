import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Academics from "./components/Academics";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className=" h-screen flex flex-col justify-between">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/edu" element={<Academics />}></Route>
          <Route exact path="/exp" element={<Experiences />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
