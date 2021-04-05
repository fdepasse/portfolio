import React from 'react'


function NavBar() {
  return <header>
    <nav id='navbar'>
      <a href='#about'>ABOUT ME</a>
      {/* <a href='#timeline'>TIMELINE</a> */}
      <a href='#mywork'>MY WORK</a>
      <a href='#skills'>SKILLS</a>
      <a href='#contact'>CONTACT</a>
      <a href='mailto:depasse.fabien@gmail.com' aria-label='link to send an email'>
        <i className='fa fa-envelope fa-2x' aria-hidden='true'></i>
      </a>
      <a href='https://github.com/fdepasse' target='blank' aria-label='link to github profile'>
        <i className='fa fa-github fa-2x' aria-hidden='true'></i>
      </a>
      <a href='https://www.linkedin.com/in/depassefabien/' target='blank' aria-label='link to linkedin profile'>
        <i className='fa fa-linkedin-square fa-2x' aria-hidden='true'></i>
      </a>
    </nav>
  </header>
}

export default NavBar