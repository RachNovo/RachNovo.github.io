module.exports = [
  {
    title: 'Marketplace Lodging App',
    githubLink: 'https://github.com/RachNovo/lodging-marketplace-app',
    deployedApp: 'https://lodging-marketplace.herokuapp.com/',
    description: 'Need somewhere to stay? Use this app to find the perfect place! I designed and built the reviews service UI and back end. I also stabilized the view size by designing an algorithm that displays a pagination selection bar, reducing reviews to 7 per page leading to improved site elegance.',
    pic: 'https://rachel-portfolio.s3.amazonaws.com/house.jpg',
    techList: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Cypress.io']
  },
  {
    title: 'Movie Reviews App',
    githubLink: 'https://github.com/RachNovo/movie-reviews-app',
    deployedApp: 'https://audience-reviews.herokuapp.com/',
    description: 'Your one-stop-shop for movie information, reviews, ratings, previews and more. I replaced and scaled the back end of the audience-reviews service to handle 100+ million records. I automated the initialization process by developing a protocol that transfers data to an AWS instance using an SQL schema, transferring 10+ GB with one command. I also improved efficiency by refactoring legacy code to use back end queries and column indexing leading to a reduction in query time from five minutes to ~ 80 ms. I designed payload files to deliver realistic stress testing and the app maintained a 0% error rate at 1k rps.',
    pic: 'https://rachel-portfolio.s3.amazonaws.com/popcorn.jpg',
    techList: ['Node.js', 'PostgreSQL', 'SQL', 'AWS', 'K6', 'Loader.io']
  }
]