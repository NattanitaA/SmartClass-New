import React from 'react';
import './Logo.css';
import logo from './siie.png'; // Tell webpack this JS file uses this image

console.log(logo); 

function Header() {
  return <img src={logo} alt="Logo" />;
}

export default Header;