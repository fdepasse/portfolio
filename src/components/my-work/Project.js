import React from 'react'
import ProjectLinks from './ProjectLinks'
import Tech from './Tech'

function Project({ project, fade }) {
  return <article id='project'>
    <div id='project-desc' role='article' className={fade ? 'fade' : ''}>
      <h3 className='heading'>{project.name}</h3>
      <p className='content'>{project.description}</p>
    </div>
    <Tech project={project} fade={fade} />
    <ProjectLinks project={project} fade={fade} />
  </article>
}

export default Project