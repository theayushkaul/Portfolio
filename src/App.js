import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Project/Projects";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import React, { useState } from 'react'
import ScrollToTop from "./ScrollToTop";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[state,setState] = useState(true)
  function changeState(nav) {
    setState(nav);
    console.log(state);
  }
  return (
    <>
    <BrowserRouter>
          <Navbar changeState = {changeState}/>
          <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home state = {state}/>} />
            <Route exact path="/about" element={<About state = {state}/>} />
            <Route exact path="/resume" element={<Resume state = {state}/>} />
            <Route exact path="/projects" element={<Projects state = {state}/>} />
            <Route exact path="/contact" element={<Contact state = {state}/>} />
          </Routes>
          </ScrollToTop>
        </BrowserRouter>
    </>
  );
}

export default App;
