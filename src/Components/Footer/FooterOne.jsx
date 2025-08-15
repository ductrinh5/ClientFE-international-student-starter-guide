import React from "react";
import { Link } from "react-router-dom";

function FooterOne() {
  return (
    <footer className="footer-wrapper footer-layout1">
      <div className="widget-area">
        <div className="container">
          <div className="newsletter-area">
            <div className="newsletter-top">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                  <h2 className="newsletter-title text-capitalize mb-0">
                    get updated the latest newsletter
                  </h2>
                </div>
                <div className="col-lg-7">
                  <form className="newsletter-form">
                    <input
                      className="form-control "
                      type="email"
                      placeholder="Enter Email"
                      required=""
                    />
                    <button type="submit" className="th-btn style3">
                      Subscribe Now{" "}
                      <img src="/assets/img/icon/plane.svg" alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img src="/assets/img/logo-theme.svg" alt="PStudent" />
                    </Link>
                  </div>
                  <p className="about-text">
                    The essential guides and places for PTIT international
                    students
                  </p>
                  <div className="th-social">
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link to="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/service">Our Service</Link>
                    </li>
                    <li>
                      <Link to="/contact">Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Address</h3>
                <div className="th-widget-contact">
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="/assets/img/icon/phone.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>
                        <Link to="tel:+01234567890" className="info-box_link">
                          +01 234 567 890
                        </Link>
                      </p>
                      <p>
                        <Link to="tel:+09876543210" className="info-box_link">
                          +09 876 543 210
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="/assets/img/icon/envelope.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>
                        <Link
                          to="mailto:mailinfo00@tourm.com"
                          className="info-box_link"
                        >
                          mailinfo00@gmail.com
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="mailto:support24@tourm.com"
                          className="info-box_link"
                        >
                          support24@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="/assets/img/icon/location-dot.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>Km10, Nguyen Trai Street, Ha Đong District, Ha Noi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="copyright-wrap background-image"
        style={{ backgroundImage: "url('/assets/img/bg/bar.png')" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright 2025 <Link to="/">PStudent</Link>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-card">
                <span className="title">We Accept</span>
                <img src="/assets/img/shape/cards.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterOne;
