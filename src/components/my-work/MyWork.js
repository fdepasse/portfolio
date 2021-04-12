import React, { useState } from 'react'
import { defaultProject } from '../../content/data/data'
import Carousel from './Carousel'
import Project from './Project'

function MyWork() {
  const [project, setProject] = useState(defaultProject)
  const [slide, setSlide] = useState(defaultProject.id)
  const [swipeRight, setSwipeRight] = useState(false)
  const [swipeLeft, setSwipeLeft] = useState(false)

  return <section id='mywork' className='section'>
    <section id='mywork-sub-section'>
      <h2 className='title'>MY WORK</h2>
      <section className='container'>
        <Carousel project={project} setProject={setProject} slide={slide} setSlide={setSlide} swipeRight={swipeRight} setSwipeRight={setSwipeRight} swipeLeft={swipeLeft} setSwipeLeft={setSwipeLeft}/>
        <Project project={project} swipeRight={swipeRight} swipeLeft={swipeLeft}/>
      </section>
    </section>
  </section>
}

export default MyWork