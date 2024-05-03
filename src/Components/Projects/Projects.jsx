import React from "react";
import { Link } from 'react-router-dom';

import "./projects.css"

const Projects = () => {

  return(
    <section className="projects-container">
      <h2 className="projects-title">
        PROJECTS
      </h2>
      <p className="projects-intro">
        Here are some of the projects I've worked on...
      </p>

      <div className="projects-card-container">
        
        <article className="project-card">
          <div className="project-logo-container">
            <Link to ={"screenix"} className="project-logo">
              <img src = "/assets/images/screenix/screenix_1.png" alt="screenix"/>
            </Link>
          </div>
          <div className="project-card-description">
            <div className="project-card-description-text">
              <div className="project-card-description-title">
                Screenix
              </div>
              <div>
              A movie and tv shows information showing website
              </div>
            </div>
            <div className="project-link">
              <Link to ={"screenix"}>
                <button className="project-link-button">
                  <div className="project-link-item">
                    More info
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects