import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="container-fluid py-5" id="contact" style={{ backgroundColor: "black" }}>
      
      <h2 className="text-center fw-bold mb-4 text-primary">
        Contact Me
      </h2>

      <p className="text-center text-secondary mb-5">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-6">

          {/* Card/Form Box */}
          <div
            className="card p-4 shadow-lg border border-secondary"
            style={{
              borderRadius: "15px",
              backgroundColor: "#0d0d0d",
              color: "white",
            }}
          >
            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-50 fw-bold d-block mx-auto"
                style={{ borderRadius: "10px" }}
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
