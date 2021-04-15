import React from 'react'
import DropDownMobile from './DropDownMobile'
import ContactLinks from './ContactLinks'
import DesktopMenu from './DesktopMenu'

function NavBar({ menu, setMenu }) {

  return <header onMouseEnter={() => setMenu(false)}>
    <nav id='navbar'>
      <DropDownMobile menu={menu} setMenu={setMenu} />
      <DesktopMenu />
      <ContactLinks />
    </nav >
  </header >
}

export default NavBar