import React from 'react'
import { skills } from '../../content/data/data'

function Skills() {
  return <section id='skills-section'>
    <h3 className='heading'>Skills</h3>
    <section id='skills-bars-container'>
    {skills.map(skillSet => {
      return <article id='skill-set-bar' key={skillSet.id}>
        <h5>{skillSet.id}</h5>
        <div id='skill-set-techs' role='list'>
          {skillSet.tech.map(tech => {
            return <figure key={tech.name} className='skill' role='listitem'>
              {tech.icon}
              <figcaption>{tech.name}</figcaption>
            </figure>
          })}
        </div>
      </article>
    })}
    </section>
  </section>
}

export default Skills