import React from 'react'
import { interests } from '../../content/data/data'
import { TiLinkOutline } from 'react-icons/ti'

function ArticlesInterests({ showArticle, setShowArticle }) {

  return interests.map(article => {
    return <article key={article.heading} id={article.name}
      onMouseEnter={(event) => setShowArticle(event.target.id)}
      onMouseLeave={() => setShowArticle('')}>
      <h3 className={`${showArticle === article.name ? 'show-article' : ''} heading`}>{article.heading}</h3>
      <p className={`${showArticle === article.name ? 'show-article' : ''} content`}>{article.content}</p>
      {article.url &&
        <a href={article.url} target='blank' className={showArticle === article.name ? 'show-article' : ''}>
          <figure className='interest-url'>
            <TiLinkOutline />
            <figcaption>{article.caption}</figcaption>
          </figure>
        </a>}
    </article>
  })
}

export default ArticlesInterests