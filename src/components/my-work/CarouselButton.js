import React from 'react'
import { projects } from '../../content/data/data'


function handleClick(event, setProject) {
  const projectClicked = projects.find(project => project.id === Number(event.target.innerText))
  setProject(projectClicked)
}

function CarouselButton({ setProject}) {
  return <nav>
    {projects.map(project => {
      return <button key={project.id}
        onClick={(event) => {
          handleClick(event, setProject)
        }}
      > {project.id}</button>
    })}
  </nav >
}

export default CarouselButton