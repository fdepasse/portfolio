import React from 'react'
import { projects } from '../../content/data/data'


function displayProject(handleClick, setProject) {
  const newSlide = handleClick()
  const projectClicked = projects.find(project => project.id === newSlide)
  setProject(projectClicked)
}

export function PreviousButton({ setProject, slide, setSlide, setSwipeLeft }) {

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

  return <div role='button' onClick={() => {
    displayProject(handleClick, setProject)
    setSwipeLeft(true)
  }}>
    <span>
      <i className='arrow left'></i>
    </span>
    Previous
  </div>
}


export function NextButton({ setProject, slide, setSlide, setSwipeRight }) {

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

  return <div role='button' onClick={() => {
    displayProject(handleClick, setProject)
    setSwipeRight(true)
  }}>
    Next
    <span>
      <i className='arrow right'></i>
    </span>
  </div>
}