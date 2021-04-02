import React from 'react'
import { intro, aboutMe } from '../content/text/text'
import profile from '../content/images/profile-picture.jpg'

function AboutMe() {
  return <section id='about' className='section'>
    <section className='sub-section'>
    <article>
      <h2 className='title'>ABOUT ME</h2>
      <h3>{intro}</h3>
      <p>{aboutMe}</p>
    </article>
    <img src={profile} alt='fabien headshot' />
    </section>
  </section>
}

export default AboutMe