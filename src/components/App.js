import React, {useState} from 'react'
import { FormspreeProvider } from '@formspree/react';
import Home from './home/Home'
import AboutMe from './about-me/AboutMe'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import MyWork from './my-work/MyWork'
import NavBar from './navbar/NavBar'
import Interests from './interests/Interests';

function App() {
  const [menu, setMenu] = useState(false)
  console.log(menu)

  return <FormspreeProvider project={process.env.PROJECT_ID}>
    <NavBar menu={menu} setMenu={setMenu}/>
    <main onMouseEnter={() => setMenu(false)}>
      <Home />
      <AboutMe />
      <MyWork />
      <Interests/>
      <Contact />
    </main>
    <Footer/>
  </FormspreeProvider >
}

export default App
