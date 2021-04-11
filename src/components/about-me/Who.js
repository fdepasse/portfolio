import React from 'react'
import { who } from '../../content/data/data'


function Who() {
  return <article>
        <img src={who.image} alt='fabien headshot' width='525' height='700' />
          <h3 className='heading'>{who.heading}</h3>
          <p className='content'>{who.content}</p>
        </article>
}

export default Who