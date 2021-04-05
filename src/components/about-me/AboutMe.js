import React from 'react'
import { intro, aboutMe, hobbies, mySkills } from '../../content/data/data'
import profile from '../../content/images/profile-picture.jpg'

function AboutMe() {
  return <section id='about' className='section'>
    <section className='sub-section'>
      <h2 className='title appear-left'>ABOUT ME</h2>
      <section className='container'>
        <article className='appear-left'>
          <h3 className='heading'>{intro}</h3>
          <p className='content'>{aboutMe}</p>
          <p className='content'>{mySkills}</p>
          <p className='content'>{hobbies}</p>
        </article>
        <img src={profile} alt='fabien headshot' className='appear-right'/>
      </section>
    </section>
  </section>
}

export default AboutMe