import React from 'react'
import SkillList from './SkillList'

function Skills() {
  return <section id='skills' className='section'>
    <section className='sub-section'>
      <h2 className='title'>SKILLS</h2>
      <section id='skills-list'>
        <SkillList />
      </section>
    </section>
  </section>
}

export default Skills