import React from 'react'
import CarouselButton from './CarouselButton'


function Carousel({ project, setProject, fade }) {
  return <figure>
    <img src={project.image} alt='carousel showing projects' className={fade}/>
    <CarouselButton setProject={setProject}/>
  </figure>
}

export default Carousel