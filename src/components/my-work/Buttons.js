import React from 'react'
import { projects } from '../../content/data/data'


function displayProject(handleClick, setProject) {
  const newSlide = handleClick()
  const projectClicked = projects.find(project => project.id === newSlide)
  setProject(projectClicked)
}

export function PreviousButton({ setProject, slide, setSlide }) {

  function handleClick() {
    let newSlide = ''
    if (slide - 1 < 1) {
      newSlide = projects.length
    } else {
      newSlide = slide - 1
    }
    setSlide(newSlide)
    return newSlide
  }

  return <button onClick={() => displayProject(handleClick, setProject)}>
    <span id='previous-arrow'>
      <i className='arrow left'></i>
    </span>
    Previous
  </button>
}


export function NextButton({ setProject, slide, setSlide }) {

  function handleClick() {
    let newSlide = ''
    if (slide + 1 > projects.length) {
      newSlide = 1
    } else {
      newSlide = slide + 1
    }
    setSlide(newSlide)
    return newSlide
  }

  return <button onClick={() => displayProject(handleClick, setProject)}>
    Next
    <span id='next-arrow'>
      <i className='arrow right'></i>
    </span>
  </button>
}