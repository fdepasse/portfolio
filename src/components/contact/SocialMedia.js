import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'


function SocialMedia() {
  return <div id='contact-links' role='navigation' aria-label='social media links'>
    <h3 className='heading'>You can also find me on</h3>
    <nav >
      <a href='https://github.com/fdepasse' target='blank' aria-label='link to github profile'>
        <SiGithub />
      </a>
      <a href='https://www.linkedin.com/in/depassefabien/' target='blank' aria-label='link to linkedin profile'>
        <SiLinkedin />
      </a>
    </nav>
  </div>
}

export default SocialMedia