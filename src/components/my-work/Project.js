import React from 'react'

function Project({ project }) {
  return <article>
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
}

export default Project