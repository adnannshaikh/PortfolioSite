import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
        <hr />
      </nav>
    )
}

export default Navbar