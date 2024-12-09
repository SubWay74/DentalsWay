import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../nav";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";

const PharmacyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleSearch, settoggleSearch] = useState(false);
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {" "}
      {/* Header */}
      <header className={`${isScrolled ? 'pharmacy-header' : ''} header`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home-1" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo-15.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div class="browse-categorie">
                <div class="dropdown categorie-dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown">
                        <ImageWithBasePath src="assets/img/icons/browse-categorie.svg" alt="Img" /> Browse Categories
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);">Ayush</a>
                        <a class="dropdown-item" href="javascript:void(0);">Covid Essentials</a>
                        <a class="dropdown-item" href="javascript:void(0);">Devices</a>
                        <a class="dropdown-item" href="javascript:void(0);">Glucometers</a>
                    </div>
                </div>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home-1" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <NavLinks />
               
              </ul>
            </div>
           
          </nav>
        </div>
      </header>
      {/* /Header */}
    </div>
  );
};

export default PharmacyHeader;
