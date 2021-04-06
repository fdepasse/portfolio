import React from 'react'
import Form2 from './Form'
import SocialMedia from './SocialMedia'

function Contact() {
  return <section id='contact' className='section'>
    <section className='sub-section'>
      <h2 className='title'>CONTACT</h2>
      <section className='container'>
        <Form2 />
        <SocialMedia />
      </section>
    </section>
  </section>
}

export default Contact