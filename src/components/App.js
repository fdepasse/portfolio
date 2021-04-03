import React from 'react'
import { FormspreeProvider } from '@formspree/react';
import AboutMe from './AboutMe'
import Contact from './contact/Contact'
import MyWork from './my-work/MyWork'
import NavBar from './NavBar'
import Skills from './skills/Skills'
import Timeline from './Timeline'

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
