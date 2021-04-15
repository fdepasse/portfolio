import React from 'react'

function DropDownMobile({ menu, setMenu }) {
  return <div role='navigation' aria-label='navigation menu' id='mobile-nav'>
    <h6 onMouseEnter={() => setMenu(!menu)}>MENU
    <span><i className={menu ? 'arrow down' : 'arrow right'}></i>
      </span>
    </h6>
    <ul className={menu ? 'mobile-menu' : ''}>
      <li><a href='#home' role='listitem'>Home</a></li>
      <li><a href='#about' role='listitem'>About me</a></li>
      <li><a href='#mywork' role='listitem'>My Work</a></li>
      <li><a href='#interests' role='listitem'>Interests</a></li>
      <li><a href='#contact' role='listitem'>Contact</a></li>
    </ul>
  </div>
}

export default DropDownMobile