
import atm from "@/public/atm-machine.jpg";
import calculator from "@/public/calculator.jpg";
import guessinggame from "@/public/guessinggame.jpg";
import countdowntimer from "@/public/countdowntimer.jpg";
import currencyconverter from "@/public/currencyconverter.jpg";

import Image from "next/image";



// pages/projects 



export default function Projects() {
  return (
    <div className="projectsContainer">
      <div className="header">
        <h1 className="title">My Projects</h1>
        <p className="description">
          Here are some of the projects I have developed as a web developer, designer, and SEO expert. Each project showcases my skills in frontend and backend development, UI/UX design, and effective SEO strategies.
        </p>
      </div>
      <div className="projectGrid">
        <div className="projectCard">
          <Image src="/atm.jpg" alt="ATM Machine Project" width={500}  height={300}  className="projectImage" />
          <h2 className="projectTitle">ATM Machine Simulation</h2>
          <p className="projectText">
            An interactive simulation of an ATM machine, built to enhance functionality and security while allowing users to perform basic banking tasks.
          </p>
        </div>
        <div className="projectCard">
          <Image src="/calculator.jpg" alt="Calculator Project" width={500}  height={300} className="projectImage" />
          <h2 className="projectTitle">Custom Calculator</h2>
          <p className="projectText">
            Developed a user-friendly calculator with clear functionality and precision, ideal for basic and advanced calculations.
          </p>
        </div>
        <div className="projectCard">
          <Image src="/guessinggame.jpg" alt="Guessing Game Project" width={500} height={300}    className="projectImage" />
          <h2 className="projectTitle">Guessing Game</h2>
          <p className="projectText">
            A fun, interactive guessing game where users attempt to guess the correct number within limited tries, enhancing engagement and interactivity.
          </p>
        </div>
        <div className="projectCard">
          <Image src="/countdowntimer.jpg" alt="Countdown Timer Project" width={500} height={300}   className="projectImage" />
          <h2 className="projectTitle">Countdown Timer</h2>
          <p className="projectText">
            Created a countdown timer application that provides real-time countdowns, ideal for tasks requiring precise timing.
          </p>
        </div>
        <div className="projectCard">
          <Image src="/currencyconverter.jpg" alt="Currency Converter Project" width={500}  height={300}   className="projectImage" />
          <h2 className="projectTitle">Currency Converter</h2>
          <p className="projectText">
            Designed a currency converter app that provides real-time conversion rates, enhancing financial accessibility for users worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
