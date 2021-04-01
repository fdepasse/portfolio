import React from 'react'
import '../style/navbar.scss'

function NavBar() {
  return <header>
    <nav>
      <a href='#about'>ABOUT ME</a>
      <a href='#timeline'>TIMELINE</a>
      <a href='#mywork'>MY WORK</a>
      <a href='#skills'>SKILLS</a>
      <a href='#contact'>CONTACT</a>
      <a href='mailto:depasse.fabien.com'>
        <i className='fa fa-envelope fa-lg' aria-hidden='true'></i>
        </a>
      <a href='https://github.com/fdepasse' target='blank'>
      <i className='fa fa-github fa-lg' aria-hidden='true'></i>
        </a>
      <a href='https://www.linkedin.com/in/depassefabien/' target='blank'>
      <i className='fa fa-linkedin-square fa-lg' aria-hidden='true'></i>
        </a>
    </nav>
  </header>
}

export default NavBar