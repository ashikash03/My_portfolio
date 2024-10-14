// src/components/Projects.js
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Projects.css'; // Custom CSS for flip-box effect
import Food from '../../assets/images/food.png'
import Food2 from '../../assets/images/food2.png'
import Furniture from '../../assets/images/furniture.png'
import Furniture2 from '../../assets/images/furniture2.png'
import Book from '../../assets/images/book.png'
import Book2 from '../../assets/images/book2.png'
import Animal from '../../assets/images/animal.png'
import Animal2 from '../../assets/images/animal2.png'
import Calculator from '../../assets/images/calculator1.png'
import Calculator2 from '../../assets/images/calculator2.png'
import Random1 from '../../assets/images/random_user1.png'
import Random2 from '../../assets/images/random_user.png'
import Movie from '../../assets/images/movie.png'
import Movie2 from '../../assets/images/movie2.png'
import Country from '../../assets/images/country.png'
import Country2 from '../../assets/images/country2.png'
const projectsData = [
  {
    id: 1,
    image1: Food,
    image2: Food2,
    title: 'Dash N Dine',
    description: 'online restaurant website using only HTML and CSS'
  },
  {
    id: 2,
    image1: Furniture,
    image2: Furniture2,
    title: 'Wooden Street Clone',
    description: 'A clone website of wooden Street online furniture store using HTML, CSS and Bootstrap'
  },
  {
    id: 3,
    image1: Book,
    image2: Book2,
    title: 'Book Store',
    description: 'Online Book store website created using HTML, CSS, and Bootstrap'
  },
  {
    id: 4,
    image1: Animal,
    image2: Animal2,
    title: 'Animal Matters TO Me Clone',
    description: "Created a clone website of AMTM welfare NGO's Website using HTML, CSS and Bootstrap"
  },
  {
    id: 5,
    image1: Calculator,
    image2: Calculator2,
    title: 'Calculator',
    description: 'Created a Simple Calculator webpage using HTML, CSS, Bootstrap and JavaScript'
  },
  {
    id: 6,
    image1:Random1,
    image2:Random2,
    title: 'Random User Generator',
    description: 'Created a website that generates Random Users by fetching data from an API. Used HTML, CSS, Bootstrap and JavaScript'
  },
  {
    id: 7,
    image1: Movie,
    image2: Movie2,
    title: 'Movie Details Webpage',
    description: 'Created a webpage that displays details of a movie which the user requests by fetching data from an API. Used HTML, CSS, Bootstrap and JavaScript'
  },
  {
    id: 8,
    image1: Country,
    image2: Country2,
    title: 'Country Data Website',
    description: 'Created a webpage that displays details of a Country which the user requests by fetching data from an API. Used HTML, CSS, Bootstrap and JavaScript'
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <MDBContainer>
        <h2 className="text-center mb-5">PROJECTS</h2>
        <MDBRow className="g-4">
          {projectsData.map(project => (
            <MDBCol md="4" key={project.id}>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={project.image1} alt={project.title} className="img-fluid" />
                    <img src={project.image2} alt={project.title} className="img-fluid" />
                  </div>
                  <div className="flip-box-back d-flex flex-column justify-content-center align-items-center">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Projects;
