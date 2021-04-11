import React from 'react'
import { interests } from '../../content/data/data'
import { TiLinkOutline } from 'react-icons/ti'

function ArticlesInterests() {
  return interests.map(article => {
    return <article key={article.heading} id={article.name}>
      {article.image}
      <h3 className='heading'>{article.heading}</h3>
      <p className='content'>{article.content}</p>
      {article.url && 
      <a href={article.url} target='blank'>
        <figure className='interest-url'>
          <TiLinkOutline />
          <figcaption>{article.caption}</figcaption>
        </figure>
      </a>}
    </article>
  })
}

export default ArticlesInterests