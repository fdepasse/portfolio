import React from 'react'

function ProjectLinks({ project }) {
  return <nav>
    <figure>
      <a href={project.url} target='blank'>
        <i className='fa fa-link fa-2x' aria-label='link to project'></i>
      </a>
      <figcaption>URL</figcaption>
    </figure>
    <figure>
      <a href={project.github} target='blank'>
        <i className='fa fa-github fa-2x' aria-label='link to github'></i>
      </a>
      <figcaption>README</figcaption>
    </figure>
  </nav>
}

export default ProjectLinks