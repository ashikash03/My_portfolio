import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/logo.ico'; // Import your logo here
import '../Header/Header.css';

function Header() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  

  return (
    <MDBNavbar expand='lg' light sticky className='bg-white bg-opacity-75'>
      <MDBContainer fluid>
        <MDBNavbarBrand aria-current='page' href='#'>
          {/* Replace the brand name with the logo image */}
          <img src={logo} alt="Logo" className="logo-image" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBNavbarNav className='d-flex w-auto '>
          <MDBNavbarLink href='#about'>About Me</MDBNavbarLink>
          <MDBNavbarLink href='#projects'>Projects</MDBNavbarLink>
          <MDBNavbarLink href='#contact'>Contact me</MDBNavbarLink>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
