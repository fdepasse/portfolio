import React from 'react'
import ArticlesInterests from './ArticlesInterests'

function Interests() {
  return <section id='interests' className='section'>
    <section className='sub-section'>
      <h2 className='title'>INTERESTS</h2>
      <section id='articles-interests'>
      <ArticlesInterests/>
      </section>
    </section>
  </section>
}

export default Interests