import React from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import MyWork from './my-work/MyWork'
import NavBar from './NavBar'
import Skills from './Skills'
import Timeline from './Timeline'


function App() {
  return <div>
    <NavBar />
    <main>
      <AboutMe />
      <Timeline />
      <MyWork />
      <Skills />
      <Contact />
    </main>
  </div>

}

export default App
