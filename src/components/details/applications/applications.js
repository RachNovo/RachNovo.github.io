module.exports = [
  {
    title: 'Block Fall',
    githubLink: 'https://github.com/RachNovo/tetris',
    details: 'https://rachnovo.github.io/tetris/',
    deployedApp: 'https://tetris-cb2dc.web.app/',
    description: 'Enjoy the music and see how many levels you can complete before the pieces fall too fast! I recreated this familiar and addictive game using the technologies above. I had so much fun building the game engine, UI and tests!',
    pic: 'https://rachel-portfolio.s3.amazonaws.com/Tetris',
    techList: 'React | Tailwind CSS | HTML Canvas | Firebase | mocha/chai',
    id: 50,
    gif: 'tbd'
  },
  {
    title: 'Marketplace Lodging App',
    githubLink: 'https://github.com/RachNovo/lodging-marketplace-app',
    details: 'https://rachnovo.github.io/lodging-marketplace-app/',
    deployedApp: '',
    description: 'Need somewhere to stay? Use this app to find the perfect place! I designed and built the reviews service UI and back-end. I also stabilized the view size by designing an algorithm that displays a pagination selection bar, reducing reviews to seven per page, improving site elegance.',
    pic: 'https://rachel-portfolio.s3.amazonaws.com/house-small.jpg',
    techList: 'React | Node.js | MongoDB | AWS | Cypress.io',
    id: 27,
    gif: 'https://rachel-portfolio.s3.amazonaws.com/lodging-marketplace-demo.gif',
  },
  {
    title: 'Movie Reviews App',
    githubLink: 'https://github.com/RachNovo/movie-reviews-app',
    details: 'https://rachnovo.github.io/movie-reviews-app/',
    deployedApp: '',
    description: 'Your one-stop-shop for movie information, reviews, ratings, previews and more. I replaced and scaled the back-end of the audience-reviews service to handle 100+ million records. I automated the initialization process by developing a protocol that transfers data to an AWS instance using an SQL schema, transferring 10+ GB with one command. I also improved efficiency by refactoring legacy code to use back-end queries and column indexing, leading to a reduction in query time from five minutes to ~80 ms. I designed payload files to deliver realistic stress testing and the app maintained a 0% error rate at 1k rps.',
    pic: 'https://rachel-portfolio.s3.amazonaws.com/popcorn-small.jpg',
    techList: 'Node.js | PostgreSQL | SQL | AWS | K6 | Loader.io',
    id: 28,
    gif: 'https://rachel-portfolio.s3.amazonaws.com/audience-reviews-demo.gif',
  },
];
