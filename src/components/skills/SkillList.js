import React from 'react'
import { skills } from '../../content/data/data'

function SkillList() {
  return skills.map(skillSet => {
    return <article key={skillSet.id}>
      <h3 className='heading'>{skillSet.id}</h3>
      <div id='list' role='list'>
        {skillSet.tech.map(tech => {
          return <figure key={tech.name} className='skill' role='listitem'>
            {tech.icon}
            <figcaption>{tech.name}</figcaption>
          </figure>
        })}
      </div>
    </article>
  })
}

export default SkillList