import React from 'react'
import { PreviousButton, NextButton } from './Buttons'


function Carousel({ project, setProject, fade, setFade, slide, setSlide }) {
  return <figure id='project-carousel'>
    <img src={project.image} alt='carousel showing projects' className={fade ? 'fade' : ''} onAnimationEnd={() => setFade(false)} />
    <nav id='project-buttons-nav'>
      <PreviousButton setProject={setProject} setFade={setFade} slide={slide} setSlide={setSlide} />
      <NextButton setProject={setProject} setFade={setFade} slide={slide} setSlide={setSlide} />
    </nav>
  </figure>
}

export default Carousel