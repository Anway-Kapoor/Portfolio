import React from "react";

import HomeGallery from "./HomeGallery";
import Contact from "../Contact/Contact"

import "./home.css"


const Home = () => {
  const arrow = "->"

  return(
    <section>
      <div className="home-gallery-container">
        <div className="home-title">
          <strong>DESIGN {arrow} BUILD {arrow} ENJOY</strong>
        </div>
        <HomeGallery />
      </div>
      <div className="home-about-container">
        <div>
          <img src="/assets/images/profile/ps.jpeg" alt="profile" className="about-intro-profilePic"/>
        </div>
        <div className="home-about-text">
          <div>
            Hi. I'm Anway Kapoor
          </div>
          <div>
            I enjoy building websites and do problem solving
          </div>

        </div>
      </div>
      <Contact />
    </section>
  )
}

export default Home