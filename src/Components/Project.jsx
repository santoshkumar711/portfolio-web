import React from 'react'

const Project = () => {
  return (
    <div className="projects" style={{ backgroundColor: "black", paddingTop: "120px", paddingBottom: "40px", height: "120%" }}>

      <h1 className="pro" style={{ color: "white", paddingLeft: "260px" }}>Projects</h1>
      <p className='letter' style={{ color: "white", paddingLeft: "260px" }}>
        I've been making various types of projects, some of them were basics and some of them were complicated. So far I've made these projects.
      </p>

      <div
        className='santosh'
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 160px",
          justifyContent: "center",
          rowGap: "40px",
          columnGap: "60px",
        }}
      >

        <div className="card" style={{ width: "30rem", borderRadius: "20px", overflow: "hidden" }}>
          <img src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" className="card-img-top" alt="..." />
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <h5 className="card-title" style={{ color: "white" }}>To-Do-List</h5>
            <p className="card-text" style={{ color: "white" }}>
              This web helps to write To-Do-List.
            </p>
            <div
              style={{
                padding: "6px 12px",
                backgroundColor: "#222",
                color: "white",
                borderRadius: "12px",        // 👉 Curve box
                display: "inline-block",
                marginTop: "8px",            // 👉 Title + Description ke niche space
                fontSize: "14px",
                letterSpacing: "0.5px"
              }}
            >
              React•Js • Bootstrap 
            </div>
            <a href="https://github.com/santoshkumar711/To-Dos-List" className="btn btn-primary" style={{marginTop: "10px",display: "block",width: "fit-content",}}>GitHub</a>
          </div>
        </div>

        <div className="card" style={{ width: "30rem", borderRadius: "20px", overflow: "hidden" }}>
          <img src="https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/d07c1db617a36898b5e8c71013d228d11003eb36d7150b7abfe988fe097c7d66/tic-tac-toe-3.png" className="card-img-top" style={{ height: "265px" }} alt="..." />
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <h5 className="card-title" style={{ color: "white" }}>Tic-Tac-Toe Game</h5>
            <p className="card-text" style={{ color: "white" }}>
              This web helps to play a tic tac game.
            </p>
            <div
              style={{
                padding: "6px 12px",
                backgroundColor: "#222",
                color: "white",
                borderRadius: "12px",        // 👉 Curve box
                display: "inline-block",
                marginTop: "8px",            // 👉 Title + Description ke niche space
                fontSize: "14px",
                letterSpacing: "0.5px"
              }}
            >
              HTML • CSS • JavaScript
            </div>
            <a href="https://github.com/santoshkumar711/Tic-Tac-Toe-Game" className="btn btn-primary" style={{marginTop: "10px",display: "block",width: "fit-content",}}>GitHub</a>
          </div>
        </div>
        <div className="card" style={{ width: "30rem", borderRadius: "20px", overflow: "hidden" }}>
          <img src="https://img.freepik.com/free-vector/illustraion-account-login-template_53876-37548.jpg?semt=ais_hybrid&w=740&q=80" className="card-img-top" style={{ height: "265px" }} alt="..." />
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <h5 className="card-title" style={{ color: "white" }}>Sign-Up-Form</h5>
            <p className="card-text" style={{ color: "white" }}>
              This web is using for signup and login.
            </p>
            <div
              style={{
                padding: "6px 12px",
                backgroundColor: "#222",
                color: "white",
                borderRadius: "12px",        // 👉 Curve box
                display: "inline-block",
                marginTop: "8px",            // 👉 Title + Description ke niche space
                fontSize: "14px",
                letterSpacing: "0.5px"
              }}
            >
              React•Js • CSS • Bootstrap • MySQL
            </div>
            <a href="https://github.com/santoshkumar711/Signup-Form" className="btn btn-primary" style={{marginTop: "10px",display: "block",width: "fit-content",}}>GitHub</a>
          </div>
        </div>
        <div className="card" style={{ width: "30rem", borderRadius: "20px", overflow: "hidden" }}>
          <img src="Hotel-Booking.jpg" className="card-img-top" style={{ height: "265px" }} alt="..." />
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <h5 className="card-title" style={{ color: "white" }}>Hotel-Booking</h5>
            <p className="card-text" style={{ color: "white" }}>
              This web helps to booking a hotel.
            </p>
            <div
              style={{
                padding: "6px 12px",
                backgroundColor: "#222",
                color: "white",
                borderRadius: "12px",        // 👉 Curve box
                display: "inline-block",
                marginTop: "8px",            // 👉 Title + Description ke niche space
                fontSize: "14px",
                letterSpacing: "0.5px"
              }}
            >
              React•Js • CSS • Bootstrap 
            </div>
            <a href="https://github.com/santoshkumar711/Room-Booking" className="btn btn-primary" style={{marginTop: "10px",display: "block",width: "fit-content",}}>GitHub</a>
          </div>
        </div>
        <div className="card" style={{ width: "30rem", borderRadius: "20px", overflow: "hidden" }}>
          <img src="News.jpg" className="card-img-top" style={{ height: "265px" }} alt="..." />
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <h5 className="card-title" style={{ color: "white" }}>News-Web</h5>
            <p className="card-text" style={{ color: "white" }}>
              This web helps to show news
            </p>
            <div
              style={{
                padding: "6px 12px",
                backgroundColor: "#222",
                color: "white",
                borderRadius: "12px",        // 👉 Curve box
                display: "inline-block",
                marginTop: "8px",            // 👉 Title + Description ke niche space
                fontSize: "14px",
                letterSpacing: "0.5px"
              }}
            >
              React•Js • CSS • Bootstrap 
            </div>
            <a href="https://github.com/santoshkumar711/News-web" className="btn btn-primary" style={{marginTop: "10px",display: "block",width: "fit-content",}}>GitHub</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Project
