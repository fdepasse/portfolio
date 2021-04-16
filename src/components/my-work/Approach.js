import React from 'react'

function Approach({ project }) {
  return <div id='project-tech' role='article'>
    <h4>Approach</h4>
    <p className='content description'>
      {project.approach}
    </p>
  </div>
}

export default Approach