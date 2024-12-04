import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import signatureLogo from '../../assets/images/signatureNew.svg'; // Import your signature SVG file
import '../Header/Header.css';

function Header() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <MDBNavbar expand='lg' sticky style={{ backgroundColor: 'var(--background-color)', opacity: 'var(--background-opacity)' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand aria-current='page' href='#'>
          <img src={signatureLogo} alt="Signature Logo" className="logo-image" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBNavbarNav className='d-flex w-auto align-items-center' >
          <MDBNavbarLink href='#about' style={{ color: 'var(--text-color)'}}>About Me</MDBNavbarLink>
          <MDBNavbarLink href='#projects' style={{ color: 'var(--text-color)'}}>Projects</MDBNavbarLink>
          <MDBNavbarLink href='#contact' style={{ color: 'var(--text-color)'}}>Contact me</MDBNavbarLink>
          <button 
            onClick={toggleDarkMode} 
            style={{ 
              margin: '10px', 
              padding: '10px', 
              border: 'none', 
              background: 'transparent', 
              cursor: 'pointer', 
              fontSize: '18px', 
              color: 'var(--text-color)' 
            }}
          >
            {darkMode ? (
              <>
                <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px' }} />
                Light Mode
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faMoon} style={{ marginRight: '8px' }} />
                Dark Mode
              </>
            )}
          </button>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
