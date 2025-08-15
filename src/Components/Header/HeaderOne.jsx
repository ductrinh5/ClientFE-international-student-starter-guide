import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NiceSelect from "./NiceSelect";
import MobileMenu from "./MobileMenu";
import LoginForm from "./LoginForm";

function HeaderOne() {
  const languageOptions = [
    { value: "language", label: "Language" },
    { value: "CNY", label: "CNY" },
    { value: "EUR", label: "EUR" },
    { value: "AUD", label: "AUD" },
  ];
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*============================== Header Area ==============================*/}
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-xl-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-sharp fa-regular  fa-location-dot" />
                      <span>
                        Km10, Nguyen Trai Street, Ha Đong District, Ha Noi
                      </span>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-regular fa-clock" />
                      <span>Sun to Fri: 8.00 am - 7.00 pm</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="currency-menu">
                    <NiceSelect
                      options={languageOptions}
                      defaultValue="Language"
                    />
                  </div>

                  <div className="header-links">
                    <ul>
                      <li className="d-none d-md-inline-block">
                        <Link to="/contact">Support</Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => setIsLoginFormOpen(true)}
                        >
                          Sign In / Register
                          <i className="fa-regular fa-user" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="/assets/img/logo.svg" alt="PStudent" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/destination">Places</Link>
                      </li>
                      <li>
                        <Link to="/blog">Guides</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link to="/ai-chat" className="th-btn style3 th-icon">
                      Chat with AI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg bg-mask"
              style={{
                WebkitMaskImage: "url(/assets/img/logo_bg_mask.png)",
                maskImage: "url(/assets/img/logo_bg_mask.png)",
              }}
            />
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <LoginForm
        isOpen={isLoginFormOpen}
        onClose={() => setIsLoginFormOpen(false)}
      />
    </>
  );
}

export default HeaderOne;
