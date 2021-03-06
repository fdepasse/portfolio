import React from 'react'

function Project({ project }) {
  return <div id='project-desc' role='article'>
      <h3 className='heading'>{project.name}</h3>
      <p className='content'>{project.details}</p>
      <p className='content description'>{project.description}</p>
    </div>
}

export default Project