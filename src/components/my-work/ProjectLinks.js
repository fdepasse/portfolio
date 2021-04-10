import React from 'react'
import { SiGithub } from 'react-icons/si'
import { TiLinkOutline } from 'react-icons/ti'


function ProjectLinks({ project, fade }) {
  return <div id='project-links' role='navigation'className={fade ? 'fade' : ''}>
    <h4>Access Links</h4>
    <nav id='project-links-nav' >
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
  </div>
}

export default ProjectLinks