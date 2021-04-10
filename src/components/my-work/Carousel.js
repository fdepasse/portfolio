import React from 'react'
import CarouselButton from './CarouselButton'


function Carousel({ project, setProject, fade, setFade, isActive, setIsActive }) {
  return <figure id='project-carousel'>
    <img src={project.image} alt='carousel showing projects' className={fade ? 'fade' : ''} onAnimationEnd={()=> setFade(false)}/>
    <CarouselButton setProject={setProject} setFade={setFade} isActive={isActive} setIsActive={setIsActive}/>
  </figure>
}

export default Carousel