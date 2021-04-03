import React from 'react'
import Form from './Form'
import SocialMedia from './SocialMedia'

function Contact() {
  return <section id='contact' className='section'>
    <section className='sub-section'>
      <h2 className='title'>CONTACT</h2>
      <section className='container'>
        <Form />
        <SocialMedia />
      </section>
    </section>
  </section>
}

export default Contact