import React, { useState } from 'react'
import ArticlesInterests from './ArticlesInterests'

function Interests() {
  const [showArticle, setShowArticle] = useState('')

  return <section id='interests' className='section'>
    <section className='sub-section'>
      <h2 className='title'>INTERESTS</h2>
      <section id='articles-interests'>
        <ArticlesInterests showArticle={showArticle} setShowArticle={setShowArticle}/>
      </section>
    </section>
  </section>
}

export default Interests