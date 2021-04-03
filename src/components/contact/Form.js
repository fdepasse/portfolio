import React from 'react'

function Form() {
  return <div role='form' id='form' aria-label='form to send an email'>
    <h3>SEND ME AN EMAIL</h3>
    <form>
      <label htmlFor='name'>YOUR NAME</label>
      <input id='name' type='text' name='name' /><br />
      <label htmlFor='email'>YOUR EMAIL</label>
      <input id='email' type='email' name='email' /><br />
      <label htmlFor='message'>YOUR MESSAGE</label>
      <textarea id='message' type='text' name='message' /><br />
      <button type='submit'> Submit</button>
    </form>
  </div>
}

export default Form