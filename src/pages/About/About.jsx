import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="/img1.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="/img2.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hi, I'm Seif Allah, a passionate Full Stack Web Developer.I enjoy building complete web applications,
             from designing responsive and user-friendly interfaces to developing powerful 
             backend systems and databases. 
            I work with modern web technologies to create scalable, secure, 
            and efficient digital solutions that deliver a seamless user experience.
             I focus on writing clean, maintainable code, optimizing performance, and implementing best development
              practices across both frontend and backend environments. 
              I'm constantly learning new technologies, frameworks, and tools to expand my expertise
               and stay up to date with industry trends.
                My goal is to combine creativity, problem-solving,
                 and technical skills to build innovative web applications that are both visually appealing and highly functional.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;