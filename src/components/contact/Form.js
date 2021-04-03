import React from 'react'
import { ValidationError, useForm } from '@formspree/react'

function Form() {
  const [state, handleSubmit] = useForm('emailForm')

  return <div role='form' id='form' aria-label='form to send an email'>
    <h3>SEND ME AN EMAIL</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>YOUR NAME</label>
      <input id='name' type='text' name='name' required/><br />
      <label htmlFor='email'>YOUR EMAIL</label>
      <input id='email' type='email' name='email' required/><br />
      <ValidationError field='email' prefix='Email' errors={state.errors} />
      <label htmlFor='message'>YOUR MESSAGE</label>
      <textarea id='message' type='text' name='message' required/><br />
      <button type='submit' disabled={state.submitting}>Send</button>
    </form>
    {state.succeeded ? <p>Email sent!</p> : ''}
  </div>
}


export default Form

