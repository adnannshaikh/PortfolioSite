import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (

    <Router>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <hr />
      </nav>
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
