import React, { useState } from 'react'
import DropDownMobile from './DropDownMobile'
import ContactLinks from './ContactLinks'
import DesktopMenu from './DesktopMenu'

function NavBar() {
  const [menu, setMenu] = useState(false)

  return <header>
    <nav id='navbar'>
      <DropDownMobile menu={menu} setMenu={setMenu}/>
      <DesktopMenu/>
      <ContactLinks/>
    </nav >
  </header >
}

export default NavBar