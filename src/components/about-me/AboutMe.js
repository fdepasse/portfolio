import React from 'react'
import { who, code, learning, future, background } from '../../content/data/data'
import profile from '../../content/images/profile-picture.jpg'


function AboutMe() {
  return <section id='about' className='section'>
    <section id='about-sub-section'>
      <h2 className='title'>ABOUT ME</h2>
      <section className='container'>
        <article>
        <img src={profile} alt='fabien headshot' width='525' height='700' />
          <h3 className='heading'>Who am I?</h3>
          <p className='content'>{who}</p>
        </article>
        <article>
          <h3 className='heading'>Background</h3>
          <p className='content'>{background}</p>
        </article>
        <article>
          <h3 className='heading'>Code</h3>
          <p className='content'>{code}</p>
        </article>
        <article>
          <h3 className='heading'>Love learning</h3>
          <p className='content'>{learning}</p>
        </article>
        <article>
          <h3 className='heading'>Future focus</h3>
          <p className='content'>{future}</p>
        </article>
      </section>
    </section>
  </section>
}

export default AboutMe