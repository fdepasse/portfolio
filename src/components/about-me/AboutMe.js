import React from 'react'
import ArticlesAboutMe from './ArticlesAboutMe'
import Who from './Who'


function AboutMe() {
  return <section id='about' className='section'>
    <section id='about-sub-section'>
      <h2 className='title'>ABOUT ME</h2>
      <section className='container'>
        <Who />
        <ArticlesAboutMe/>
      </section>
    </section>
  </section>
}

export default AboutMe