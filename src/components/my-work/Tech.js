import React from 'react'

function Tech({ project, swipeRight, swipeLeft }) {
  return <div id='project-tech' role='article' className={`${swipeRight ? 'swipe-right' : ''} ${swipeLeft ? 'swipe-left' : ''}`}>
    <h4>Technologies</h4>
    <div id='project-tech-list'>
    {project.tech.map(tech => {
      return <figure key={tech.name}>
        {tech.icon}
        <figcaption>{tech.name}</figcaption>
      </figure>
    })}
    </div>
     </div>
}

export default Tech