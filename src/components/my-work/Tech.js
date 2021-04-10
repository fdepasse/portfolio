import React from 'react'

function Tech({ project, fade }) {
  return <div role='article' className={fade ? 'fade' : ''}>
    {project.tech.map(tech => {
      return <figure key={tech.name}>
        {tech.icon}
        <figcaption>{tech.name}</figcaption>
      </figure>
    })}
  </div>
}

export default Tech