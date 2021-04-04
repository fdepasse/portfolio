import pacmanGif from '../images/pac-man-thriller.gif'
import breakingbadGif from '../images/breaking-bad.gif'
import hackasnackGif from '../images/hack-a-snack.gif'
import dreamlandGif from '../images/dreamland.gif'
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiNodeDotJs, SiPython, SiFlask, SiMongodb, SiPostgresql, SiWebpack, SiJest, SiMocha, SiReact } from 'react-icons/si'


// ! About Me
export const intro = 'I am a Junior Developer based in London who enjoys solving problems and creating useful great looking apps.'


export const aboutMe = 'I used to be a Senior Business Analyst and, after 8 years in my previous company, I wanted to learn new skills, follow my passion for problem solving and express my creativity. After completing a few online tutorials out of curiosity, I found myself a passion for coding, so I decided to enroll in a Software Engineering Immersive Course.' 

export const mySkills = 'After 12 intense weeks, I can create frontend applications using HTML, CSS, JavaScript and React. I also have backend experience and can build Node.js - Express and Python - Flask apps talking to MongoDB or PostgreSQL databases.'

export const hobbies = 'When I don\'t code, you\'ll find me playing football, running marathons or for fun, driving a virtual F1 car, cooking and travelling (when safe to do so!).'


// ! My Work
export const projects = [
  {
    id: 1,
    name: 'Dreamland Festival',
    description: 'Mobile first, full stack application built with React, Python, Flask, SQLAlchemy, Marshmallow and a PostgreSQL database. The app allows attendees to our fictional festival to see the line-up, plan their personal schedule for the day and order food. I focused on building and testing the user model on the backend (authentication, permission, personalised, schedule). On the frontend, I built the homepage live artists feature, the reaction button and the user profile page displaying their personal schedule and order summary.',
    url: 'http://dreamland-festival.herokuapp.com/',
    github: 'https://github.com/fdepasse/dreamland-festival/blob/main/README.md',
    image: dreamlandGif
  },
  {
    id: 2,
    name: 'Hack A Snack',
    description: 'Full stack application built with React, Node.js, Express, Mongoose and a NoSQL MongoDB database. Users of the app can browse, search, filter, post, review and save recipes. On the backend, I specifically worked on the review and search recipe functionalities. On the frontend, I built the search, filter and rating features.',
    url: 'https://hackasnack.herokuapp.com/',
    github: 'https://github.com/fdepasse/hack-a-snack/blob/main/README.md',
    image: hackasnackGif
  },
  {
    id: 3,
    name: 'The Breaking Bad Project',
    description: 'Front end application built with React, talking to a Public API and implementing AJAX principles with JavaScript. The app is a tribute to the Breaking Bad series allowing visitors to look at various artistic illustrations of the show, browse the characters and the episodes. I worked on the characters page, the nav bar and the hero section of the homepage. ',
    url: 'https://fdepasse.github.io/the-breaking-bad-project/',
    github: 'https://github.com/fdepasse/the-breaking-bad-project/blob/main/README.md',
    image: breakingbadGif
  },
  {
    id: 4,
    name: 'Pac-Man Thriller',
    description: 'Front End Application in the form of a grid game built with HTML, CSS and Vanilla JavaScript. The app is a remake of the classic Pac-Man game, themed around Michael Jackson video clip “Thriller”. It is fully running on pure HTML, CSS, Vanilla JavaScript via DOM Manipulation. ',
    url: 'https://fdepasse.github.io/pacman-thriller/',
    github: 'https://github.com/fdepasse/pacman-thriller/blob/main/README.md',
    image: pacmanGif
  },
]

export const defaultProject = projects[0]


// ! Skills

const Express = () => <i className="devicon-express-original"></i>

export const skills = [
  {
    id: 'Confident',
    tech: [
      {
        name: 'HTML',
        icon: <SiHtml5 />
      },
      {
        name: 'CSS',
        icon: <SiCss3 />
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript />
      },
      {
        name: 'React',
        icon: <SiReact />
      },
      {
        name: 'Sass',
        icon: <SiSass />
      },
      {
        name: 'Node.js',
        icon: <SiNodeDotJs />
      }
    ]
  },
  {
    id: 'Comfortable',
    tech: [
      {
        name: 'Python',
        icon: <SiPython />
      },
      {
        name: 'Flask',
        icon: <SiFlask />
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql />
      },
      {
        name: 'Express',
        icon: <Express />
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb />
      }
    ]
  },
  {
    id: 'Beginner',
    tech: [
      {
        name: 'Webpack',
        icon: <SiWebpack />
      },
      {
        name: 'Jest',
        icon: <SiJest />
      },
      {
        name: 'Mocha',
        icon: <SiMocha />
      },
      {
        name: 'Chai',
        icon: ''
      },
      {
        name: 'Supertest',
        icon: ''
      },
      {
        name: 'Pytest',
        icon: ''
      }
    ]
  }
]