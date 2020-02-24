import React, {Component} from 'react';
import styles, {main, title} from '../../Details.css';
import Application from './Application.jsx';

class ApplicationList extends Component {
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
          {this.props.applications.map((el, i) => <Application
            title={el.title}
            pic={el.pic}
            techList={el.techList}
            description={el.description}
            key={i}
            />)}
        </div>
      </div>
    )
  }
}

export default ApplicationList;