import React from 'react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'


function NavBar() {
  return <header>
    <nav id='navbar'>
        <a href='#about'>ABOUT ME</a>
        <a href='#mywork'>MY WORK</a>
        <a href='#skills'>SKILLS</a>
        <a href='#contact'>CONTACT</a>
        <a href='mailto:depasse.fabien@gmail.com' aria-label='link to send an email'>
        <SiGmail className='icon' />
      </a>
      <a href='https://github.com/fdepasse' target='blank' aria-label='link to github profile'>
        <SiGithub className='icon' />
      </a>
      <a href='https://www.linkedin.com/in/depassefabien/' target='blank' aria-label='link to linkedin profile'>
        <SiLinkedin className='icon' />
      </a>
    </nav>
  </header>
}

export default NavBar