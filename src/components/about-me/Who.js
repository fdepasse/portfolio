import React from 'react'
import { who } from '../../content/data/data'


function Who() {
  return <article id='who'>
        <img src={who.image} alt='fabien headshot'/>
          <h3 className='heading'>{who.heading}</h3>
          <p className='content'>{who.content}</p>
        </article>
}

export default Who