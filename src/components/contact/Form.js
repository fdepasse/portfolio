import React from 'react'
import { ValidationError, useForm } from '@formspree/react'

function Form() {
  const [state, handleSubmit] = useForm('emailForm')

  return <form onSubmit={handleSubmit}>
    <input id='name' type='text' name='name' placeholder='Your Name' required />
    <input id='email' type='email' name='email' placeholder='Your Email' required />
    <ValidationError field='email' prefix='Email' errors={state.errors} />
    <textarea id='message' type='text' name='message' placeholder='Your Message' required />
    {state.succeeded ? 
    <p className='form-message'> Email sent</p> 
    : <button type='submit' disabled={state.submitting}>
      Send
      <span><i className='arrow right'></i></span>
      </button>}
  </form>
}


export default Form

