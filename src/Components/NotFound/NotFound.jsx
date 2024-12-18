import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.homeLink}>Go Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: 'var(--not-found-bg-color)',
  },
  title: {
    fontSize: '6rem',
    margin: '0',
    color: 'var(--link-color)',
  },
  homeLink: {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: 'var(--link-color)',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1rem',
  },
};

export default NotFound;
