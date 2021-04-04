import React from 'react'

function ProjectLinks({ project }) {
  return <nav>
    <a href={project.url} target='blank'>
      <figure>
        <i className='fa fa-link fa-2x' aria-label='link to project'></i>
        <figcaption>URL</figcaption>
      </figure>
    </a>
    <a href={project.github} target='blank'>
      <figure>
        <i className='fa fa-github fa-2x' aria-label='link to github'></i>
        <figcaption>README</figcaption>
      </figure>
    </a>
  </nav>
}

export default ProjectLinks