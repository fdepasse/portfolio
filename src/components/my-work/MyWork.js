import React, { useState } from 'react'
import { defaultProject } from '../../content/data/data'
import Carousel from './Carousel'
import Project from './Project'
import Tech from './Tech'
import ProjectLinks from './ProjectLinks'

function MyWork() {
  const [project, setProject] = useState(defaultProject)
  const [slide, setSlide] = useState(defaultProject.id)

  return <section id='mywork' className='section'>
    <section className='sub-section'>
      <h2 className='title'>MY WORK</h2>
      <section id='mywork-content-container'>
        <section id='project-carousel-section'>
          <Project project={project} />
          <Carousel project={project} setProject={setProject} slide={slide} setSlide={setSlide} />
        </section>
        <section id='tech-links-section'>
          <Tech project={project} />
          <ProjectLinks project={project} />
        </section>
      </section>
    </section>
  </section>
}

export default MyWork