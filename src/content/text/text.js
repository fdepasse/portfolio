import pacmanGif from '../images/pac-man-thriller.gif'
import breakingbadGif from '../images/breaking-bad.gif'
import hackasnackGif from '../images/hack-a-snack.gif'
import dreamlandGif from '../images/dreamland.gif'

export const intro = 'I am a Junior Developer who used to be a Senior Business Analyst in a large corporation for 8 years.'

export const aboutMe = 'From here, I enrolled in an Immersive Software Engineering Course to follow my passion for solving problems and to express my creativity by building useful and great looking applications. My career has been driven by my desire to learn, as demonstrated each time I moved on to a new role in my previous company. Today, I am looking at joining a team of developers where I can collaboratively work on projects and learn from my peers.'

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