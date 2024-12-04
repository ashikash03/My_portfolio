// src/components/Contact.js
import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import './Contact.css'; // Custom CSS if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: 'var(--background-color)' }}>
      <MDBContainer>
        <MDBRow className="align-items-center">
          <MDBCol md="6">
          <h2 className="text-center mb-4" style={{ color: 'var(--text-color)' }}>CONTACT ME 📞</h2>
          <form onSubmit={handleSubmit} >
              <MDBInput
                label="Enter your name"
                id="name"
                name="name"
                type="text"
                className="mb-3"
                required
                value={formData.name}
                onChange={handleChange}
                labelStyle={{ color: 'var(--text-color)' }}
              />
              <MDBInput
                label="Enter your email address"
                id="email"
                name="email"
                type="email"
                className="mb-3"
                required
                value={formData.email}
                onChange={handleChange}
                labelStyle={{ color: 'var(--text-color)' }}
              />
              <MDBTextArea
                label="Type your message here."
                id="message"
                name="message"
                rows={4}
                className="mb-3"
                required
                value={formData.message}
                onChange={handleChange}
                labelStyle={{ color: 'var(--text-color)' }}
              />
              <MDBBtn type="submit" color="primary" style={{ backgroundColor: 'var(--primary-color)' }}>Submit</MDBBtn>
            </form>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <img
              src="https://echotechconstruction.com/wp-content/uploads/2024/04/contact_us.gif"
              alt="Contact"
              className="img-fluid rounded shadow"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Contact;
