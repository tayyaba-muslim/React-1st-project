import React from "react";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">About Us</h1>
        <p className="lead text-muted">
          Learn more about who we are, what we do, and why we do it.
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team working"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h3>Our Mission</h3>
          <p className="text-muted">
            We are dedicated to building user-friendly applications that solve
            real-world problems. Our goal is to innovate, simplify, and
            empower—helping individuals and teams unlock their full potential
            through technology.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Office culture"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h3>Who We Are</h3>
          <p className="text-muted">
            We're a passionate team of developers, designers, and creators who
            believe in the power of collaboration and design thinking. With
            every project, we aim to blend creativity with functionality.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h4 className="fw-bold">Get in Touch</h4>
        <p className="text-muted">We'd love to hear from you.</p>
        <a href="/contactUs" className="btn btn-outline-primary mt-2">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
