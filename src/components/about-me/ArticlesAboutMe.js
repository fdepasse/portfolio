import React from 'react'
import { aboutMe } from '../../content/data/data'

function ArticlesAboutMe() {
  return aboutMe.map(article => {
    return <article key={article.heading} id={article.name}>
      {article.image}
      <h3 className='heading'>{article.heading}</h3>
      <p className='content'>{article.content}</p>
    </article>
  })

}
export default ArticlesAboutMe