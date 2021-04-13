import React from 'react'
import ArticlesAboutMe from './ArticlesAboutMe'
import Who from './Who'
import Skills from './Skills'


function AboutMe() {
  return <section id='about' className='section'>
    <section className='sub-section'>
      <h2 className='title'>ABOUT ME</h2>
      <section id='who-skills'>
        <Who />
        <Skills />
      </section>
      <section id='articles-about-me'>
        <ArticlesAboutMe />
      </section>
    </section>
  </section>
}

export default AboutMe