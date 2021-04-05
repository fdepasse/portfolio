import React from 'react'
import { SiGithub } from 'react-icons/si'
import { TiLinkOutline } from 'react-icons/ti'


function ProjectLinks({ project }) {
  return <nav>
    <a href={project.url} target='blank'>
      <figure>
        <TiLinkOutline />
        <figcaption>URL</figcaption>
      </figure>
    </a>
    <a href={project.github} target='blank'>
      <figure>
        <SiGithub />
        <figcaption>README</figcaption>
      </figure>
    </a>
  </nav>
}

export default ProjectLinks