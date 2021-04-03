import React from 'react'

function SocialMedia() {
  return <div id='contact-links'role='navigation' aria-label='social media links'>
          <h3>YOU CAN ALSO FIND ME ON</h3>
          <nav >
            <a href='https://github.com/fdepasse' target='blank' aria-label='link to github profile'>
              <i className='fa fa-github fa-3x' aria-hidden='true'></i>
            </a>
            <a href='https://www.linkedin.com/in/depassefabien/' target='blank' aria-label='link to linkedin profile'>
              <i className='fa fa-linkedin-square fa-3x' aria-hidden='true'></i>
            </a>
          </nav>
        </div>
}

export default SocialMedia