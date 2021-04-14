import React from 'react'
import { PreviousButton, NextButton } from './Buttons'


function Carousel({ project, setProject, slide, setSlide }) {
  return <figure id='project-carousel'>
    <img src={project.image} alt='carousel showing projects' />
    <nav id='project-buttons-nav'>
      <PreviousButton setProject={setProject} slide={slide} setSlide={setSlide} />
      <NextButton setProject={setProject} slide={slide} setSlide={setSlide} />
    </nav>
  </figure>
}

export default Carousel