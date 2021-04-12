import React from 'react'

function Project({ project, swipeRight, swipeLeft }) {
  return <div id='project-desc' role='article' className={`${swipeRight ? 'swipe-right' : ''} ${swipeLeft ? 'swipe-left' : ''}`}>
      <h3 className='heading'>{project.name}</h3>
      <p className='content'>{project.description}</p>
    </div>
}

export default Project