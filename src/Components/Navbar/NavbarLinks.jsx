import React from "react";

import AboutEntry from "../About/AboutEntry";
import "./navbar.css"

const NavbarLinks = () => {
  const arrow= "=>"

  return(
    <nav className="navbar-title-links">
      <a href="https://www.linkedin.com/in/anway-kapoor-aa039824a/" target="blank">
        <AboutEntry id="linkedin-square" />         
      </a>
      <a href="https://github.com/Anway-Kapoor" target="blank">
        <AboutEntry id="github-square" />
      </a>
      <a href="mailto:anwaykapoor2311@gmail.com" target="blank">
        <AboutEntry id="email" />
      </a>
    </nav>

  )
}

export default NavbarLinks