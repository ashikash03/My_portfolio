import React, { useState, useEffect } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

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
    <div id="banner" className="position-relative" style={{ backgroundColor: 'var(--banner-background-color)'}}>
      <MDBContainer className="quote position-absolute top-50 start-50 translate-middle  p-3 rounded shadow" style={{ backgroundColor: 'var(--background-color)', opacity: 'var(--background-opacity)' }}>
        <p className="fs-3 text-center" style={{ color: 'var(--text-color)'}}>"Hi! I am <span className="typing-text">{displayedWord}</span><span className="cursor">|</span>"</p>
      </MDBContainer>
    </div>
  );
};

export default Banner;
