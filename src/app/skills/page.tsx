


// pages/skills.js
import React from 'react';


export default function Skills() {
  return (
    <div className="skillsContainer">
      <div className="skillsBox">
        <h1 className="skillsTitle">My Skills</h1>
        <p className="skillsText">
          As a versatile web developer and designer with deep knowledge of SEO, I possess a strong command over multiple programming languages and frameworks, making me proficient in creating dynamic, user-centered, and optimized web solutions.
        </p>
        <div className="skillsGrid">
          <div className="skillCard">
            <h2 className="skillTitle">Frontend Development</h2>
            <p className="skillText">
              Expert in HTML, CSS, JavaScript, and modern libraries like React and Next.js for building responsive, interactive, and visually engaging user interfaces.
            </p>
          </div>
          <div className="skillCard">
            <h2 className="skillTitle">Backend Development</h2>
            <p className="skillText">
              Proficient in Node.js, Express, and MongoDB, allowing me to create robust and scalable backends to support diverse web applications.
            </p>
          </div>
          <div className="skillCard">
            <h2 className="skillTitle">UI/UX Design</h2>
            <p className="skillText">
              Skilled in designing intuitive, user-friendly interfaces with a strong focus on aesthetics, usability, and user experience.
            </p>
          </div>
          <div className="skillCard">
            <h2 className="skillTitle">SEO Optimization</h2>
            <p className="skillText">
              Knowledgeable in SEO best practices, helping to boost web visibility and rankings on search engines through optimized coding and structure.
            </p>
          </div>
          <div className="skillCard">
            <h2 className="skillTitle">Programming Languages</h2>
            <p className="skillText">
              Proficient in JavaScript, Python, and PHP, giving me the versatility to build diverse web solutions and handle complex functionalities.
            </p>
          </div>
          <div className="skillCard">
            <h2 className="skillTitle">Version Control & Deployment</h2>
            <p className="skillText">
              Experienced with Git and GitHub for version control, and skilled in deploying applications using platforms like Vercel and Heroku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
