import React from 'react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

function ContactLinks() {
  return <div role='navigation' id='links'>
        <ul>
          <li><a href='mailto:depasse.fabien@gmail.com' aria-label='link to send an email'><SiGmail className='icon' /></a></li>
          <li><a href='https://github.com/fdepasse' target='blank' aria-label='link to github profile'><SiGithub className='icon' /></a></li>
          <li><a href='https://www.linkedin.com/in/depassefabien/' target='blank' aria-label='link to linkedin profile'><SiLinkedin className='icon' /></a></li>
        </ul>
      </div>
}

export default ContactLinks