import React from 'react'
import CarouselButton from './CarouselButton'


function Carousel({ project, setProject }) {
  return <figure>
    <img src={project.image} alt='carousel showing projects' />
    <CarouselButton setProject={setProject} />
  </figure>
}

export default Carousel