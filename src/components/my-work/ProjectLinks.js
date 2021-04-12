import React from 'react'
import { SiGithub } from 'react-icons/si'
import { TiLinkOutline } from 'react-icons/ti'


function ProjectLinks({ project, swipeRight, swipeLeft }) {
  return <div id='project-links' role='navigation' className={`${swipeRight ? 'swipe-right' : ''} ${swipeLeft ? 'swipe-left' : ''}`}>
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