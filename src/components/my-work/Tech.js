import React from 'react'

function Tech({ project }) {
  return <div id='project-tech' role='article'>
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