import React from 'react'
import { skills } from '../../content/data/data'

function SkillList() {
  return skills.map(skillSet => {
    return <article id='skill-set-block' key={skillSet.id}>
      <h3 className='heading'>{skillSet.id}</h3>
      <div id='skill-set-list' role='list'>
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