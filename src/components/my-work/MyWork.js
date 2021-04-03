import React, { useState } from 'react'
import { defaultProject } from '../../content/data/data'
import Carousel from './Carousel'
import Project from './Project'

function MyWork() {
  const [project, setProject] = useState(defaultProject)

  return <section id='mywork' className='section'>
    <section className='sub-section'>
      <Project project={project}/>
      <Carousel project={project} setProject={setProject} />
    </section>
  </section>
}

export default MyWork