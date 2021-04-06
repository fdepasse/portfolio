import React, { useState } from 'react'
import { ValidationError, useForm } from '@formspree/react'


function Form() {
  const [state, handleSubmit] = useForm('emailForm')

return <div role='form' id='form' aria-label='form to send an email'>
  <h3 className='heading'>Send me an email</h3>
  <form onSubmit={handleSubmit}>
    <label htmlFor='name'>YOUR NAME</label>
    <input id='name' type='text' name='name' required />
    <label htmlFor='email'>YOUR EMAIL</label>
    <input id='email' type='email' name='email' required />
    <ValidationError field='email' prefix='Email' errors={state.errors} />
    <label htmlFor='message'>YOUR MESSAGE</label>
    <textarea id='message' type='text' name='message' required />
    {state.succeeded ? <p className='form-message'> Email sent!</p> : <button type='submit' disabled={state.submitting}>SEND</button>}
  </form>
</div>
}


export default Form

