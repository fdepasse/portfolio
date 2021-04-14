import React from 'react'

function DesktopMenu({ menu, setMenu }) {
  return <div role='navigation' aria-label='navigation menu' id='desktop-nav'>
    <ul>
      <li><a href='#home' role='listitem'>HOME</a></li>
      <li><a href='#about' role='listitem'>ABOUT</a></li>
      <li><a href='#mywork' role='listitem'>MY WORK</a></li>
      <li><a href='#interests' role='listitem'>INTERESTS</a></li>
      <li><a href='#contact' role='listitem'>CONTACT</a></li>
    </ul>
  </div>
}

export default DesktopMenu