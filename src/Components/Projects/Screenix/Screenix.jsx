import React from "react";

import TechEntry from "../../TechEntry/TechEntry"
import Gallery from "../../Gallery/Gallery";


const Screenix = () => {
  const appName = "screenix"
  const imageTotal = 3  

  return(
    <section className="project-page-container">
      <h2 className="project-title">
        Screenix
      </h2>
      <h4 className="project-section-title">
        All the movies and tv shows information
      </h4>

      <div className="project-description">        
        <p className="project-text">
            Screenix is a website giving information related to films, television series from tmdb api.
        </p>

        <h4 className="project-text">
          App features:
        </h4>
        
        <ul className="project-features">
          <li>Shows Trending, Whats's Popular, Top Rated Movies or TV Shows</li>
          <li>Search for movies and tv shows</li>
          <li>Has an explore page in which you filter by genre or rating</li>
          <li>Gives a detailed information about movie or tv show</li>
          <li>Scroll endlessly, the content flows on and on with every scroll</li>
        </ul>

        <p className="project-text">
            Screenix is a website giving information related to films, television series from tmdb api. It provides a wealth of data 
            such as cast, crew, plot summaries, posters, trailers, and user-generated reviews and ratings.
        </p>

        <h4 className="project-section-title">
          Tech used:
        </h4>
        <div className="project-tech-list">
          <TechEntry id="react" />
        </div>

        <h4 className="project-section-title">
          Links:
        </h4>  
        <div className="project-tech-list">
          <a href="https://screenix.vercel.app/" target="blank">
            <TechEntry id="screenix" />
          </a>
          <a href="https://github.com/Anway-Kapoor/screenix" target="blank">
            <TechEntry id="github" />
          </a>
        </div>

        <div>
          <Gallery appName={appName} imageTotal={imageTotal} />
        </div>

      </div>

    </section>
  )
}

export default Screenix