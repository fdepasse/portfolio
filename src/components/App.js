import React from 'react'
import { FormspreeProvider } from '@formspree/react';
import Home from './home/Home'
import AboutMe from './about-me/AboutMe'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import MyWork from './my-work/MyWork'
import NavBar from './navbar/NavBar'
import Skills from './skills/Skills'
import Interests from './interests/Interests';

function App() {
  return <FormspreeProvider project={process.env.PROJECT_ID}>
    <NavBar />
    <main>
      <Home />
      <AboutMe />
      <MyWork />
      <Skills />
      <Interests/>
      <Contact />
    </main>
    <Footer/>
  </FormspreeProvider >
}

export default App
