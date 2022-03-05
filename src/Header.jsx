import React from 'react';
import logo from './Images/logo.jpg';



const Header = () => {
  return(
    <>
      <div className='header'>
          <img src={logo} alt ="logo"
             height="50px" weight="70px" /> 
          <h1>Jai Keep</h1>
      </div>
    </>
  )};

export default Header;