import React from "react";
import "./footer.css";
import footerimg from "../assets/footer-img.webp";

const Footer = () => {
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
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div class="col-lg-6">
                      <input type="text" placeholder="E-mail" />
                    </div>
                    <div class="col-lg-12">
                      <textarea placeholder="Message" rows={4}></textarea>
                      <button
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
              <img src={footerimg} alt="" />
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
                125-711-811 | 125-668-886 <br /> Support.music@gmail.com
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer__social">
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
              <a href="#">
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
