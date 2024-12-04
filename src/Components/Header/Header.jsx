import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo.ico'; // Import your logo here
import '../Header/Header.css';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <MDBNavbar expand='lg' light={!isDarkMode} dark={isDarkMode} sticky className='bg-white bg-opacity-75'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src={logo} alt="Logo" className="logo-image" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={!isNavCollapsed}>
          <MDBNavbarNav className='ms-auto'>
            <MDBNavbarItem>
              <MDBNavbarLink href='#about'>About Me</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#projects'>Projects</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#contact'>Contact Me</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <button
          className={`btn btn-${isDarkMode ? 'light' : 'dark'} ms-3`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;