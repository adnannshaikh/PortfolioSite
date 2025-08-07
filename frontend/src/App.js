import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";

function App() {
  return (

    <Router>
      <Navbar/>
    {/* // <div className="App">
    // <h1>Welcome To Adnan's Portfolio</h1>
    // </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/blog" element = {<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
