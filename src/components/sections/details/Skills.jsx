import React, {Component} from 'react';
import styles, {main, title, text, boldText} from '../Details.css';

class Skills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={title}>
          My Skills
        </div>
        <div className={text}>
        <span className={boldText}>Front-End:</span> Javascript, HTML, CSS, CSS Modules, React, JQuery <br/>
        <span className={boldText}>Back-End:</span> Node.js/Express, MongoDB/Mongoose, MySQL/Sequelize, PostgreSQL, RESTful API <br/>
        <span className={boldText}>Tools:</span> Git/Github, npm, Webpack, Babel, K6, Loader.io, Cypress, Mocha, Chai, TDD, AWS (EC2/S3), Heroku
        </div>
      </div>
    )
  }
}

export default Skills;