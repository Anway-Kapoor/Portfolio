import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import "./homeGallery.css"


const HomeGallery = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/assets/images/screenix/screenix_1.png",
      title: "Screenix",
      link: "projects/screenix"
    }
  ]


  useEffect(() => {
    const timer = setInterval(() => {

      if (currentIndex === images.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)

      }
    }, 5000)

    return () => clearInterval(timer)

  },[currentIndex, images.length])


  return(
    <figure>
      <div className="home-gallery-pic-container">
        <Link to ={images[currentIndex].link}>
          <img className="home-gallery-pic" alt="home gallery" src={images[currentIndex].src}  />
        </Link>
      </div>

      <figcaption className="home-gallery-nav">
        <Link to ={images[currentIndex].link} className="home-gallery-link">
            {images[currentIndex].title}
          </Link>
      </figcaption>
    </figure>
  )
}

export default HomeGallery