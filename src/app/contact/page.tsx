

// pages/contact.

import React from 'react';


export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactBox">
        <h1 className="contactTitle">Contact Me</h1>
        <p className="contactText">
          If you’d like to connect or have any questions, please feel free to reach out. I'd love to hear from you!
        </p>
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name" className="label">Name</label>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="Your Name"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Your Email"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" className="label">Message</label>
            <textarea
              id="message"
              
              className="textarea"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
