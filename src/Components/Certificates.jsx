import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "DEVOPS",
      org: "BRIZTECH INFOSYSTEM PVT.LTD",
      date: "23-04-2025 To 23-10-2025",
      logo: "/Devops.jpg",
      image: "/Devops.jpg"
    },
    {
      title: "AI & PYTHON",
      org: "BRIZTECH INFOSYSTEM PVT.LTD",
      date: "07-01-2025 To 21-05-2025",
      logo: "/AI & PYTHON.jpg",
      image: "/AI & PYTHON.jpg"
    },
    {
      title: "Getting Started With AWS",
      org: "Simplilearn | Skillup",
      date: "10-08-2025",
      logo: "/AWS.jpg",
      image: "/AWS.jpg"
    },
    {
      title: "PostgreSQL :Become an SQL developer",
      org: "Simplilearn | Skillup",
      date: "24-08-2025",
      logo: "/Postgresql.jpg",
      image: "/Postgresql.jpg"
    },
    {
      title: "Mobile App Development",
      org: "Techstern Solution",
      date: "26-08-2024 To 30-11-2024",
      logo: "/App-Developer.jpg",
      image: "/App-Developer.jpg"
    }
  ];

  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "50px",
        color: "white"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "bold" }}>
        Certificates
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px", color: "#ccc" }}>
        I've participated in many contests, courses and tests and got certified in many skills.
      </p>

      <div className="container">
        {certificates.map((c, index) => (
          <div
            key={index}
            className="d-flex align-items-center p-3 mb-3"
            style={{
              background: "#111",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0px 0px 8px rgba(255,255,255,0.05)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0px 0px 15px rgba(255,255,255,0.15)";
              e.currentTarget.style.transform = "scale(1.01)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0px 0px 8px rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => window.open(c.image, "_blank")}
          >
            {/* Logo */}
            <img
              src={c.logo}
              alt="logo"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "8px",
                marginRight: "20px",
                objectFit: "cover"
              }}
            />

            {/* Text */}
            <div>
              <h5 style={{ margin: 0, fontWeight: "600" }}>{c.title}</h5>
              <p style={{ margin: 0, color: "#bbb", fontSize: "14px" }}>
                {c.org} • {c.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
