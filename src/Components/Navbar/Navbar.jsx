import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`nav-links ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>Home</Link></li>
        <li><Link to="Program" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={() => setMobileMenu(false)}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={() => setMobileMenu(false)}>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
