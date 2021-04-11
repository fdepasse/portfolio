import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'


function Footer() {
  return <footer>
    <a href='#home'><i className='arrow up'></i></a>
    <nav >
      <a href='https://github.com/fdepasse' target='blank' aria-label='link to github profile'>
        <SiGithub />
      </a>
      <a href='https://www.linkedin.com/in/depassefabien/' target='blank' aria-label='link to linkedin profile'>
        <SiLinkedin />
      </a>
    </nav>
  </footer>
}

export default Footer