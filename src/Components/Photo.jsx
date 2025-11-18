import React from 'react'

const Photo = () => {
  return (
    <div 
      className="photo-section d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#1a1a1a",
        height: "100vh",  
        color: "white",
      }}
    >
      <img src="/santosh.jpg" className="rounded-circle img-fluid"style={{ width: "250px", height: "250px",objectFit: "cover",border: "3px solid white" }}
        alt=""
      />

      <h1 className="mt-4 fw-bold">Santosh Kumar</h1>

      <p className="text-light">
        B.C.A. Student @ <span className="text-info">Sai Nath University Ranchi Jharkhand</span>
      </p>

      <p className="text-secondary text-center px-3">
        Turning Web Dreams into Reality, Just Like Tony Stark's Vision.
      </p>
      <a 
        href="/Santosh-Resume.pdf" 
        className="btn btn-primary px-4 mt-2"
        target="_blank"
      >
        Resume
      </a>
    </div>
  )
}

export default Photo
