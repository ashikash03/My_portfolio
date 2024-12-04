import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center text-white' >
      <MDBContainer>
        <section>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href="mailto:ashikash170303@gmail.com"
            role='button'
            style={{ color: 'var(--text-color)' }}
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.instagram.com/its_muhammed_ashik/profilecard/?igsh=MWt4NWlvejhxbW0xZA=='
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.linkedin.com/in/muhammed-ashik-a7774b213/'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://github.com/ashikash03'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-1'>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/' style={{ color: 'var(--text-color)' }}>
    MDBootstrap.com
  </a>
      </div>
    </MDBFooter>
  );
}
  

export default Footer