import React from 'react'
import { FormspreeProvider } from '@formspree/react';
import AboutMe from './about-me/AboutMe'
import Contact from './contact/Contact'
import MyWork from './my-work/MyWork'
import NavBar from './navbar/NavBar'
import Skills from './skills/Skills'
import Timeline from './timeline/Timeline'

function App() {
  return <FormspreeProvider project={process.env.PROJECT_ID}>
    <NavBar />
    <main>
      <AboutMe />
      <Timeline />
      <MyWork />
      <Skills />
      <Contact />
    </main>
  </FormspreeProvider>
}

export default App
