import React from "react";

import AboutEntry from "./AboutEntry";



import "./about.css"

const About = () => {

  return(
    <section>
      <div className="about-container">
        <div className="about-intro-container">
          <p className="about-text">
            Hi. I'm Anway Kapoor currently a junior pursuing a computer science degree. I enjoy building interactive and intuitive user experiences.
          </p>
          <p className="about-text">
            I also enjoy doing problem solving.
          </p>
          <p className="about-text">
           
            
          </p>
          <h4 className="about-text">
            <strong>Tech skills:</strong>
          </h4>
          <div className="about-tech-skills">
            <AboutEntry id="html5" />
            <AboutEntry id="css" />
            <AboutEntry id="js" />
            <AboutEntry id="react-atom" />
            <AboutEntry id="node" />
          </div>    
        </div>

        <div className="about-history-container">
          <h1 className="about-title">
            MY STORY
          </h1>
          <p className="about-text">

          </p>
          <p className="about-text">
            
          </p>
        </div>
      </div>
    </section>  
  )
}

export default About