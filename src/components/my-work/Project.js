import React from 'react'
import ProjectLinks from './ProjectLinks'
import Tech from './Tech'

function Project({ project, swipeRight, swipeLeft }) {
  return <article id='project'>
    <div id='project-desc' role='article' className={`${swipeRight ? 'swipe-right' : ''} ${swipeLeft ? 'swipe-left' : ''}`}>
      <h3 className='heading'>{project.name}</h3>
      <p className='content'>{project.description}</p>
    </div>
    <Tech project={project} swipeRight={swipeRight} swipeLeft={swipeLeft} />
    <ProjectLinks project={project} swipeRight={swipeRight} swipeLeft={swipeLeft} />
  </article>
}

export default Project