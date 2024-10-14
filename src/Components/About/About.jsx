// src/components/About.js
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import './About.css'; // Custom CSS for About section

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <MDBContainer>
        <MDBRow className="align-items-center">
          <MDBCol md="6">
            <MDBTypography tag="h2" className="mb-4">ABOUT ME</MDBTypography>
            <p>Hi there! I'm an aspiring Full Stack Developer with a love for modern web tech. I’ve got a solid background in HTML, CSS, JavaScript, Python, and a few other languages. Right now, I’m building my skills through an internship at Luminar Technolab, focusing on the MERN(A) stack and front-end tools like Bootstrap and Tailwind CSS.</p>

<p>I enjoy problem-solving, collaborating with teams, and always learning something new. Let's create something awesome together!</p>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/029/711/176/small_2x/developer-with-ai-generated-free-png.png"
              alt="About"
              className="img-fluid rounded shadow"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default About;
