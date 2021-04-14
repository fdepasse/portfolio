import React from 'react'
import { interests } from '../../content/data/data'
import { TiLinkOutline } from 'react-icons/ti'

function ArticlesInterests({ showArticle, setShowArticle }) {
  return interests.map(article => {
    return <article key={article.heading} id={article.name} onMouseOver={() => setShowArticle(true)} onMouseOut={() => setShowArticle(false)}>
      <h3 className={`${showArticle ? 'show-article' : ''} heading`}>{article.heading}</h3>
      <p className={`${showArticle ? 'show-article' : ''} content`}>{article.content}</p>
      {article.url &&
        <a href={article.url} target='blank' className={showArticle ? 'show-article' : ''}>
          <figure className='interest-url'>
            <TiLinkOutline />
            <figcaption>{article.caption}</figcaption>
          </figure>
        </a>}
    </article>
  })
}

export default ArticlesInterests