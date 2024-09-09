import React, { useState } from 'react'
import './assets/css/main.css'
import './index.css'


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="#" className="logo d-flex align-items-center me-auto" style={{textDecorationLine:'none'}}>
            <h1 className="sitename">Student Portal</h1>
          </a>

          <nav id="navmenu" className={`navmenu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a href="/home" className="active"style={{textDecorationLine:'none'}}>Home<br /></a>
              </li>
              <li>
                <a href="/academic"style={{textDecorationLine:'none'}}>Academic</a>
              </li>
              <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <a href="#" onClick={toggleDropdown}>
        <span>Certificates</span> 
        <i className={`bi bi-chevron-down toggle-dropdown ${isDropdownOpen ? 'open' : ''}`}></i>
      </a>
                <ul>
                  <li><a href="/eventcertificate"style={{textDecorationLine:'none'}}>Event</a></li>
                  <li><a href="/interncertificate"style={{textDecorationLine:'none'}}>Internship</a></li>
                  <li><a href="/course"style={{textDecorationLine:'none'}}>Course</a></li>
                </ul>
              </li>
              <li><a href="/upload"style={{textDecorationLine:'none'}}>Upload</a></li>
              <li><a href="/profile"style={{textDecorationLine:'none'}}>Profile</a></li>
            </ul>
          </nav>

          <a className="btn-getstarted" href="index.html" style={{textDecorationLine:'none'}}>Login</a>

          <i 
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={handleMobileMenuToggle}
          ></i>
        </div>
  </header>
  <script src="assets/bootstrap/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/bootstrap/php-email-form/validate.js"></script>
  <script src="assets/bootstrap/aos/aos.js"></script>
  <script src="assets/bootstrap/glightbox/js/glightbox.min.js"></script>
  <script src="assets/bootstrap/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/bootstrap/swiper/swiper-bundle.min.js"></script>
  <script src="assets/bootstrap/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="assets/bootstrap/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/js/main.js"></script>

    </div>
  )
}

export default Header