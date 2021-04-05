import React, { useEffect, useState } from 'react'
import { defaultProject } from '../../content/data/data'
import Carousel from './Carousel'
import Project from './Project'

function MyWork() {
  const [project, setProject] = useState(defaultProject)
  const [fade, setFade] = useState('')

  useEffect(() => {
    setFade('fade')
  },[project])

  console.log(fade)

  return <section id='mywork' className='section'>
    <section className='sub-section'>
      <h2 className='title'>MY WORK</h2>
      <section className='container'>
        <Project project={project} />
        <Carousel project={project} setProject={setProject} fade={fade} />
      </section>
    </section>
  </section>
}

export default MyWork