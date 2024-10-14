import React, { useState, useEffect } from 'react';
import { MDBCarousel, MDBCarouselItem, MDBContainer } from 'mdb-react-ui-kit';
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.webp';
import img3 from '../../assets/images/img-3.jpg';
import img4 from '../../assets/images/img-4.avif';
import './Banner.css';

const words = ["Muhammed Ashik..","a Full Stack Developer..", "a Student..", "a Problem Solver..", "a Lifelong Learner.."]; // Add your words here

const Banner = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed for typing

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWord];
      setDisplayedWord(isDeleting ? fullWord.substring(0, displayedWord.length - 1) : fullWord.substring(0, displayedWord.length + 1));
      
      // Adjust typing speed when deleting
      if (isDeleting) setTypingSpeed(80);
      
      // Word complete
      if (!isDeleting && displayedWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && displayedWord === '') {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length); // Move to the next word
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout); // Cleanup timeout
  }, [displayedWord, isDeleting]);

  return (
    <div id="banner" className="position-relative">
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem className='w-100 d-block' itemId={1} src={img1} alt='Slide 1' />
        <MDBCarouselItem className='w-100 d-block' itemId={2} src={img2} alt='Slide 2' />
        <MDBCarouselItem className='w-100 d-block' itemId={3} src={img3} alt='Slide 3' />
        <MDBCarouselItem className='w-100 d-block' itemId={4} src={img4} alt='Slide 4' />
      </MDBCarousel>
      <MDBContainer className="quote position-absolute top-50 start-50 translate-middle bg-white bg-opacity-75 p-3 rounded shadow">
        <p className="fs-3 text-center">"Hi! I am <span className="typing-text">{displayedWord}</span><span className="cursor">|</span>"</p>
      </MDBContainer>
    </div>
  );
};

export default Banner;
