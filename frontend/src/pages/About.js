import React from "react";

const About = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">
                About Me
            </h2>
            <p>
                Hey! I'm Adnan — a developer who loves turning ideas into reality. I’m currently learning full-stack development and building cool stuff like portfolio sites and e-commerce projects.
            </p>
                  <hr className="my-4" />
      <h3 className="mb-3">Projects</h3>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Personal Portfolio</h5>
              <p className="card-text">The site you're on right now — built using React and FastAPI!</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Perfume E-Commerce (Coming Soon)</h5>
              <p className="card-text">A full-stack perfume brand website with cart, checkout, and admin panel.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <h3 className="mb-3">Skills & Tech Stack</h3>
      <div className="row">
        <div className="col-md-3 col-6 mb-3">
          <span className="badge bg-primary w-100 py-2">HTML</span>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <span className="badge bg-secondary w-100 py-2">CSS</span>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <span className="badge bg-success w-100 py-2">JavaScript</span>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <span className="badge bg-warning text-dark w-100 py-2">React.js</span>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <span className="badge bg-info text-dark w-100 py-2">Python</span>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <span className="badge bg-dark w-100 py-2">FastAPI</span>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <span className="badge bg-danger w-100 py-2">PostgreSQL</span>
        </div>
      </div>

        </div>

        
             

    )
}

export default About