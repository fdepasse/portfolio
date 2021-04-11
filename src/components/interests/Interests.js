import React from 'react'
import ArticlesInterests from './ArticlesInterests'

function Interests() {
  return <section id='interests' className='section'>
    <section id='interests-sub-section'>
      <h2 className='title'>INTERESTS</h2>
      <section className='container'>
        <ArticlesInterests/>
      </section>
    </section>
  </section>
}

export default Interests