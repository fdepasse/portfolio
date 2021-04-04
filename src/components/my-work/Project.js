import React from 'react'
import ProjectLinks from './ProjectLinks'

function Project({ project }) {
  return <article>
    <div role='article'>
      <h3 className='heading'>{project.name}</h3>
      <p className='content'>{project.description}</p>
    </div>
    <ProjectLinks project={project} />
  </article>
}

export default Project