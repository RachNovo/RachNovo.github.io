import React, {Component} from 'react';
import styles, {main, title} from '../../Details.css';
import App from './App.jsx';

class Applications extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={title}>
          Recent Work
        </div>
        <div>
          {this.props.apps.map((el, i) => <App
            title={el.title}
            image={el.image}
            techList={el.techList}
            description={el.description}
            key={i}
            />)}
        </div>
      </div>
    )
  }
}

export default Applications;