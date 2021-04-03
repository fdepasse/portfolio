import React, { useState } from 'react'
import CarouselButton from './CarouselButton'
import { defaultProject } from '../../content/data/data'

function MyWork() {
  const [project, setProject] = useState(defaultProject)

  return <section id='mywork' className='section'>
    <section className='sub-section'>
      <article>
        <h2 className='title'>MY WORK</h2>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <nav>
          <a href={project.url} target='blank'>
            <i className='fa fa-link fa-2x' aria-label='link to project'></i>
          </a>
          <a href={project.github} target='blank'>
            <i className='fa fa-github fa-2x' aria-label='link to github'></i>
          </a>
        </nav>
      </article>
      <figure>
        <img src={project.image} alt='carousel showing projects' />
        <CarouselButton project={project} setProject={setProject} />
      </figure>
    </section>
  </section>
}

export default MyWork