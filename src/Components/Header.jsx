import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Portfolio</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row align-items-center gap-2">

            <li className="nav-item">
              <a className="nav-link" style={{color:"white"}} href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link"style={{color:"white"}} href="/about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link"style={{color:"white"}} href="/project">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link"style={{color:"white"}} href="/certificates">Certificates</a>
            </li>

            <li className="nav-item ms-2">
              <a className="nav-link" href="https://www.linkedin.com/in/santoshkumar711/" target="_blank">
                <img src="/linkedin.png" width="24" height="24" />
              </a>
            </li>

            <li className="nav-item ms-1">
              <a className="nav-link" href="https://github.com/santoshkumar711/" target="_blank">
                <img src="/Github.png" width="24" height="24" />
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
