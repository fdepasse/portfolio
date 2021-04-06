import React from 'react'
import ProjectLinks from './ProjectLinks'

function Project({ project, fade }) {
  return <article>
    <div role='article' className={fade ? 'fade' : ''}>
      <h3 className='heading'>{project.name}</h3>
      <p className='content'>{project.description}</p>
    </div>
    <ProjectLinks project={project} fade={fade} />
  </article>
}

export default Project