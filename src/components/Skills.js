import React from 'react'
import { SiHtml5 } from 'react-icons/si'

function Skills() {
  return <section id='skills' className='section'>
    <section className='sub-section'>
      <h2 className='title'>SKILLS</h2>
      <section id='skills-list'>
        <article>
          <h3>Confident</h3>
          <ul>
              <li>
                <div className='skill'>
                <SiHtml5/>
                <span>HTML</span>
                </div>
                </li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>SASS</li>
              <li>Node.js</li>
          </ul>
          </article>
          <article>
            <h3>Comfortable</h3>
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </article>
          <article>
            <h3>Beginner</h3>
            <ul>
              <li>Webpack</li>
              <li>Jest</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Supertest</li>
              <li>Pytest</li>
            </ul>
          </article>
      </section>
      </section>
    </section>
}

export default Skills