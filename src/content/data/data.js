import pacmanGif from '../images/pac-man-thriller.gif'
import breakingbadGif from '../images/breaking-bad.gif'
import hackasnackGif from '../images/hack-a-snack.gif'
import dreamlandGif from '../images/dreamland.gif'
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiNodeDotJs, SiPython, SiFlask, SiMongodb, SiPostgresql, SiWebpack, SiJest, SiMocha, SiReact, SiBulma } from 'react-icons/si'
import profile from '../../content/images/profile-picture.jpg'
import { RiHistoryLine, RiCodeSSlashLine } from 'react-icons/ri'
import { FaForward } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
const Express = () => <i className="devicon-express-original"></i>


// ! About Me
export const who = {
  heading: 'Who am I?',
  name: 'who',
  image: profile,
  content: 'I am a Junior Developer based in London, with a passion for problem solving. I am driven, tenacious, detailed and aim to come up with solutions as optimised as possible.'
}

export const aboutMe = [
  {
    heading: 'Background',
    name: 'background',
    image: <RiHistoryLine />,
    content: 'I’ve spent the last 8 years as a Senior Data Analyst for a large company managing 1000+ SKU’s . Having optimised and improved our reporting tools to max efficiency, I sought to challenge myself. My curiosity took me to free online coding and in January 2021 I undertook a 3 month Software Engineering immersive course.'
  },
  {
    heading: 'Code',
    name: 'code',
    image: <RiCodeSSlashLine />,
    content: 'I love logic, it’s at the core of how I work.  Whilst I particularly gravitate to Javascript and Python, I take an overall approach to ensure frontend and backend work seamlessly together.'
  },
  {
    heading: 'Love Learning',
    name: 'love-learning',
    image: <GoSearch />,
    content: 'For this website, I didn’t  use a styling framework  so I could challenge my new skills. I don’t like to leave  black boxes in my learning and seek to understand the why. I read newsletters and browse tutorials to keep up with trends and implement new features on my projects.'
  },
  {
    heading: 'Future Focus',
    name: 'future-focus',
    image: <FaForward />,
    content: 'I’m strengthening my understanding of building full stack applications and configuring projects with tools such as Webpack.  At the moment I am working on a full stack web app to organise football games between friends.'
  }
]


// ! My Work
export const projects = [
  {
    id: 1,
    name: 'Dreamland Festival',
    description: 'A full stack mobile application to help attendees to a fictional music festival organising their day.',
    url: 'http://dreamland-festival.herokuapp.com/',
    github: 'https://github.com/fdepasse/dreamland-festival/blob/main/README.md',
    tech: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Bulma', icon: <SiBulma /> },
      { name: 'Sass', icon: <SiSass /> },
      { name: 'Node.js', icon: <SiNodeDotJs /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> }
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
      { name: 'React', icon: <SiReact /> },
      { name: 'Bulma', icon: <SiBulma /> },
      { name: 'Sass', icon: <SiSass /> },
      { name: 'Node.js', icon: <SiNodeDotJs /> },
      { name: 'Express', icon: <Express /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
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
      { name: 'React', icon: <SiReact /> },
      { name: 'Bulma', icon: <SiBulma /> },
      { name: 'Sass', icon: <SiSass /> },
      { name: 'Node.js', icon: <SiNodeDotJs /> }
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
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
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
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Sass', icon: <SiSass /> },
      { name: 'Node.js', icon: <SiNodeDotJs /> }
    ]
  },
  {
    id: 'Comfortable',
    tech: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Express', icon: <Express /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
    ]
  },
  {
    id: 'Beginner',
    tech: [
      { name: 'Webpack', icon: <SiWebpack /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Mocha', icon: <SiMocha /> },
      { name: 'Chai', icon: '' },
      { name: 'Supertest', icon: '' },
      { name: 'Pytest', icon: '' }
    ]
  }
]


//  ! Interests
export const interests = [
  {
    heading: 'Football',
    name: 'football',
    content: 'I started playing when I was 8 years old in my local club. I now play 7 a side every week in North London and am part of the Brixton Hill FC 11 a side team.',
    caption:'Brixton Hill FC',
    url:'https://www.instagram.com/brixton_hill_fc/?hl=en'
  },
  {
    heading: 'Running',
    name: 'running',
    content: 'I have been running for 15 years. When I turned 30, I set myself the challenge to run a marathon for the first time. I ended up running 3 that year, raising money for Anna Freud National Centre for Children and Families and crowdfunding for a former colleague in need.',
    caption:'JustGiving',
    url:'https://www.justgiving.com/crowdfunding/fabien-depasse'
  },
  {
    heading: 'Nike',
    name: 'nike',
    content: 'I have a special affection for Nike. As a sport fan, I have always loved their products: mixing performance, innovation and style. Phil Knight\'s autobiography "Shoe Dog" is very inspiring. One of the best memories I have from the brand remains their football adverts, especially The Secret Tournament.',
    caption:'The Secret Tournament',
    url:'https://www.youtube.com/watch?v=vBy4zDLzQ-I'
  },
  {
    heading: 'Travelling',
    name: 'travelling',
    content: 'I was 18 when I first came to the UK for a month internship. The taste for travelling never left me ever since. I have spent 4 unforgettable months in Hong Kong as part of my studies in 2011 where I have developed a love for Asia.',
    caption:'',
    url:''
  },
  {
    heading: 'Cooking',
    name: 'cooking',
    content: 'I find cooking really relaxing and I enjoy sharing meals with friends. I like Asian flavours in particular and, from time to time, take cooking lessons at the School of Wok.',
    caption:'School of Wok',
    url:'https://schoolofwok.co.uk/?gclid=CjwKCAjwvMqDBhB8EiwA2iSmPLxZbYtilH-wEoWijAblty-YTxE8shMdbXhvxydIOMquVEldBilPXhoCNxsQAvD_BwE'
  },
  {
    heading: 'Formula 1',
    name: 'formula-1',
    content: 'I follow Formula 1 closely and play video game. "Drive to Survive" is one of the best sports documentary I watched.',
    caption:'Drive to Survive',
    url:'https://www.youtube.com/watch?v=aViLtXEtgqs'
  }
]