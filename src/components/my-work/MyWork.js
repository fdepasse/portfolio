import React, { useState } from 'react'
import { defaultProject } from '../../content/data/data'
import Carousel from './Carousel'
import Project from './Project'

function MyWork() {
  const [project, setProject] = useState(defaultProject)
  const [fade, setFade] = useState(false)
  const [isActive, setIsActive] = useState(true)

  return <section id='mywork' className='section'>
    <section className='sub-section'>
      <h2 className='title'>MY WORK</h2>
      <section className='container'>
        <Project project={project} fade={fade} setFade={setFade}/>
        <Carousel project={project} setProject={setProject} fade={fade} setFade={setFade} isActive={isActive} setIsActive={setIsActive}/>
      </section>
    </section>
  </section>
}

export default MyWork