// src/components/About.js
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import './About.css'; // Custom CSS for About section
import mongo from '../../assets/images/mongo.png';
import express from '../../assets/images/express.png';
import angular from '../../assets/images/angular.png';
import react from '../../assets/images/react.png';
import node from '../../assets/images/node.png';
import bootstrap from '../../assets/images/bootstrap.png';
import HTML from '../../assets/images/HTML.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import tailwind from '../../assets/images/tailwind.png';

const About = () => {
  return (
    <section id="about" className="about py-5 position-relative" style={{ backgroundColor: 'var(--background-color)' }}>
      <MDBContainer>
        <MDBRow className="align-items-center">
          <MDBCol md="6">
            <MDBTypography tag="h2" className="heading mb-4">ABOUT ME</MDBTypography>
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

        {/* Tech Logos Marquee */}
        <MDBRow>
          <MDBCol>
            <div className="tech-marquee" >
              <div className="tech-track">
                {/* First Set of Logos */}
                <img src={mongo} alt="MongoDB" />
                <img src={express} alt="Express.js" />
                <img src={angular} alt="Angular" />
                <img src={react} alt="React" />
                <img src={node} alt="Node.js" />
                <img src={bootstrap} alt="Bootstrap" />
                <img src={HTML} alt="HTML" />
                <img src={css} alt="CSS" />
                <img src={js} alt="JavaScript" />
                <img src={tailwind} alt="Tailwind CSS" />

                {/* Duplicate the logos for infinite scrolling */}
                <img src={mongo} alt="MongoDB" />
                <img src={express} alt="Express.js" />
                <img src={angular} alt="Angular" />
                <img src={react} alt="React" />
                <img src={node} alt="Node.js" />
                <img src={bootstrap} alt="Bootstrap" />
                <img src={HTML} alt="HTML" />
                <img src={css} alt="CSS" />
                <img src={js} alt="JavaScript" />
                <img src={tailwind} alt="Tailwind CSS" />
              </div>
            </div>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </section>
  );
};

export default About;
