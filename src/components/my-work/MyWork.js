import React, { useState } from 'react'
import { defaultProject } from '../../content/data/data'
import Carousel from './Carousel'
import Project from './Project'

function MyWork() {
  const [project, setProject] = useState(defaultProject)
  const [slide, setSlide] = useState(defaultProject.id)
  const [fade, setFade] = useState(false)

  return <section id='mywork' className='section'>
    <section id='mywork-sub-section'>
      <h2 className='title'>MY WORK</h2>
      <section className='container'>
        <Project project={project} fade={fade} setFade={setFade}/>
        <Carousel project={project} setProject={setProject} fade={fade} setFade={setFade} slide={slide} setSlide={setSlide}/>
      </section>
    </section>
  </section>
}

export default MyWork