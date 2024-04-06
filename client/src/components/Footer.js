import React, { useState } from "react";
import "./footer.css";
import footerimg from "../assets/contact-image.jpg";
// import sendEmail from './mailer'; 

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   await sendEmail('recipient@example.com', 'Contact Form Submission', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    //   alert('Email sent successfully!');
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   alert('Failed to send email. Please try again later.');
    // }
  };


  return (
    <div className="footer" id="contact">
      <div class="container footer-section">
        <div class="footer-top">
          <div class="row m-0">
            <div class="col-lg-8 p-0">
              <div class="footer-form-warp">
                <div class="section-title">
                  <h3
                    className="title"
                    style={{
                      fontFamily: "Satisfy",
                      fontSize: "2rem",
                      color: "#ea34ff",
                    }}
                  >
                    Contact us
                  </h3>
                  <h2>Got a Question?</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-lg-6">
                      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div class="col-lg-6">
                      <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="col-lg-12">
                      <textarea placeholder="Message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                      <button 
                        type="submit"
                        className="login-butt px-4 py-1 fs-5 rounded"
                        style={{
                          color: "white",
                          textTransform: "uppercase",
                          border: "none",
                        }}
                      >
                        Send Email
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 p-0 ">
              <img
                src={footerimg}
                alt=""
                style={{ height: "68vh", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="info__box">
              <div class="info_icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <p>
                lokesh.gla_cs20@gla.ac.in, <br /> gauri.agrawal_cs20@gla.ac.in
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="info__box info_box_center">
              <div class="info_icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <p>
                aman.kumar2_cs20@gla.ac.in <br /> shivani.singh1_cs20@gla.ac.in
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer__social">
              <a href="https://github.com/Lokeshsharma1703" target="_blank">
                <i class="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lokeshsharma1703/"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer__copyright__text">
          <p className="copy">Copyright © 2023 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
