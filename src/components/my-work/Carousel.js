import React from 'react'
import { PreviousButton, NextButton } from './Buttons'


function Carousel({ project, setProject, slide, setSlide, swipeRight, setSwipeRight, swipeLeft, setSwipeLeft }) {
  return <figure id='project-carousel'>
    <img src={project.image} alt='carousel showing projects' className={`${swipeRight ? 'swipe-right' : ''} ${swipeLeft ? 'swipe-left' : ''}`} onAnimationEnd={() => {
      setSwipeRight(false)
      setSwipeLeft(false)
      }} />
    <nav id='project-buttons-nav'>
      <PreviousButton setProject={setProject} setSwipeLeft={setSwipeLeft} slide={slide} setSlide={setSlide} />
      <NextButton setProject={setProject} setSwipeRight={setSwipeRight} slide={slide} setSlide={setSlide} />
    </nav>
  </figure>
}

export default Carousel