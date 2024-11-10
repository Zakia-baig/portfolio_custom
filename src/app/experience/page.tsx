
// pages/experience

export default function Experience() {
  return (
    <div className="experience_Container">
      <div className="experienceBox" >
        <h1 className="experienceTitle">My Experience</h1>
        <p className="experienceText">
          With a background in web development, design, and SEO, and expertise in multiple programming languages, I have a diverse range of experiences that shape my approach to creating impactful, user-centered, and technically robust solutions.
        </p>
        <div className="experienceGrid">
          <div className="experienceCard">
            <h2 className="cardTitle">Frontend Developer</h2>
            <p className="cardText">
              Worked on designing and implementing responsive, visually appealing user interfaces with technologies like React and Next.js. Focused on creating interactive and intuitive experiences for users.
            </p>
          </div>
          <div className="experienceCard">
            <h2 className="cardTitle">Backend Developer</h2>
            <p className="cardText">
              Developed backend functionality using Node.js, Express, and MongoDB, ensuring robust data handling and smooth server-side operations.
            </p>
          </div>
          <div className="experienceCard">
            <h2 className="cardTitle">UI/UX Designer</h2>
            <p className="cardText">
              Applied design principles to create user-friendly interfaces, prioritizing ease of use and visually appealing layouts, focusing on user experience and interface design.
            </p>
          </div>
          <div className="experienceCard">
            <h2 className="cardTitle">SEO Specialist</h2>
            <p className="cardText">
              Implemented SEO best practices across projects, optimizing website content and structure to enhance search engine visibility and improve organic reach.
            </p>
          </div>
          <div className="experienceCard">
            <h2 className="cardTitle">Project Manager</h2>
            <p className="cardText">
              Led teams in various projects, coordinating tasks, setting timelines, and ensuring successful project delivery while meeting client expectations.
            </p>
          </div>
          <div className="experienceCard">
            <h2 className="cardTitle">Programming Mentor</h2>
            <p className="cardText">
              Provided guidance and mentorship in programming, sharing knowledge in JavaScript, Python, and PHP, to support others in building their technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

