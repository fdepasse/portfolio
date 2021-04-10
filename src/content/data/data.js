import pacmanGif from '../images/pac-man-thriller.gif'
import breakingbadGif from '../images/breaking-bad.gif'
import hackasnackGif from '../images/hack-a-snack.gif'
import dreamlandGif from '../images/dreamland.gif'
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiNodeDotJs, SiPython, SiFlask, SiMongodb, SiPostgresql, SiWebpack, SiJest, SiMocha, SiReact, SiBulma } from 'react-icons/si'


const Express = () => <i className="devicon-express-original"></i>

// ! About Me
export const who = 'I am a Junior Developer based in London, with a passion for problem solving. I am driven, tenacious, detailed and aim to come up with solutions as optimised as possible.'

export const background = 'I’ve spent the last 8 years as a Senior Data Analyst for a large company managing 1000+ SKU’s . Having optimised and improved our reporting tools to max efficiency, I sought to challenge myself. My curiosity took me to free online coding and in January 2021 I undertook a 3 month Software Engineering immersive course.'

export const code = 'I love logic, it’s at the core of how I work.  Whilst I particularly gravitate to Javascript and Python, I take an overall approach to ensure frontend and backend work seamlessly together.'

export const learning = 'For this website, I didn’t  use a styling framework  so I could challenge my new skills. I don’t like to leave  black boxes in my learning and seek to understand the why.'

export const future = 'I’m strengthening my understanding of building full stack applications and configuring projects with tools such as Webpack.  At the moment I am working on a full stack web app to organise football games between friends.'


// ! My Work
export const projects = [
  {
    id: 1,
    name: 'Dreamland Festival',
    description: 'A full stack mobile application to help attendees to a fictional music festival organising their day.',
    url: 'http://dreamland-festival.herokuapp.com/',
    github: 'https://github.com/fdepasse/dreamland-festival/blob/main/README.md',
    tech: [
      {name: 'React', icon: <SiReact />}, 
      {name: 'Bulma', icon: <SiBulma />}, 
      {name: 'Sass', icon: <SiSass />}, 
      {name: 'Node.js', icon: <SiNodeDotJs />}, 
      {name: 'Python', icon: <SiPython />}, 
      {name: 'Flask', icon: <SiFlask />},
      {name: 'PostgreSQL', icon: <SiPostgresql />}
    ],
    image: dreamlandGif
  },
  {
    id: 2,
    name: 'Hack A Snack',
    description: 'A full stack application for users to browse, search, filter, post, review and save recipes.',
    url: 'https://hackasnack.herokuapp.com/',
    github: 'https://github.com/fdepasse/hack-a-snack/blob/main/README.md',
    tech: [
      {name: 'React', icon: <SiReact />}, 
      {name: 'Bulma', icon: <SiBulma />}, 
      {name: 'Sass', icon: <SiSass />}, 
      {name: 'Node.js', icon: <SiNodeDotJs />}, 
      {name: 'Express', icon: <Express />}, 
      {name: 'MongoDB', icon: <SiMongodb />}
    ],
    image: hackasnackGif
  },
  {
    id: 3,
    name: 'The Breaking Bad Project',
    description: 'A front end application consuming a public API for visitors to browse all things \'Breaking Bad\'.',
    url: 'https://fdepasse.github.io/the-breaking-bad-project/',
    github: 'https://github.com/fdepasse/the-breaking-bad-project/blob/main/README.md',
    tech: [
      {name: 'React', icon: <SiReact />}, 
      {name: 'Bulma', icon: <SiBulma />}, 
      {name: 'Sass', icon: <SiSass />}, 
      {name: 'Node.js', icon: <SiNodeDotJs />} 
    ],
    image: breakingbadGif
  },
  {
    id: 4,
    name: 'Pac-Man Thriller',
    description: 'A Michael Jackson\'s Thriller take on the classic Pac-Man game, powered by Vanilla JavaScript.',
    url: 'https://fdepasse.github.io/pacman-thriller/',
    github: 'https://github.com/fdepasse/pacman-thriller/blob/main/README.md',
    tech: [
      {name: 'HTML', icon: <SiHtml5 />}, 
      {name: 'CSS', icon: <SiCss3 />}, 
      {name: 'JavaScript', icon: <SiJavascript />}, 
    ],
    image: pacmanGif
  },
]

export const defaultProject = projects[0]


// ! Skills


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


//  ! Interests
export const hobbies = 'When I don\'t code, you\'ll find me playing football, running marathons or for fun, driving a virtual F1 car, cooking and travelling (when safe to do so!).'

