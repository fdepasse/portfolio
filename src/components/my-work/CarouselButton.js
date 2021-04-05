import React from 'react'
import { projects } from '../../content/data/data'


function handleClick(event, setProject) {
  const projectClicked = projects.find(project => project.id === Number(event.target.innerText))
  setProject(projectClicked)
}

function CarouselButton({ setProject, setFade, isActive, setIsActive }) {
  return <nav>
    {projects.map(project => {
      return <button key={project.id}
        className={isActive && project.id === 1 ? 'is-active' : ''}
        onClick={(event) => {
          handleClick(event, setProject)
          setFade(true)
          setIsActive(false)
        }}
      >{project.id}</button>
    })}
  </nav >
}

export default CarouselButton