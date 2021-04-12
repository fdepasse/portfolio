import React from 'react'

function Home() {
  return <section id='home' className='section'>
    <section id='home-sub-section'>
      <h1 className='appear-left'>FABIEN DEPASSE</h1>
      <h2 className='appear-right'>Junior Developer</h2>
      <a href='#about'className='appear-left'><i className='arrow down'></i></a>
    </section>
    <span id='credits'>Photo by <a href="https://unsplash.com/@bundo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank' rel='noreferrer'>Bundo Kim</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText "target='_blank' rel='noreferrer'>Unsplash</a></span>
  </section>
}

export default Home