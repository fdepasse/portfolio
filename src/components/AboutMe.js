import React from 'react'
import { aboutMe } from '../content/text/text'
import profile from '../content/images/profile-picture.jpg'

function AboutMe() {
  return <section id='about'>
    <article>
      <aside>
      <h2>ABOUT ME</h2>
      <p>{aboutMe}</p>
      </aside>
      <img src={profile} alt='fabien headshot' />
    </article>
  </section>
}

export default AboutMe