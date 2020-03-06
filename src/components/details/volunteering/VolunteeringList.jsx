/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles, { title } from '../Details.css';
import Volunteering from './Volunteering.jsx';
import volunteering from './volunteering.js';

class VolunteeringList extends PureComponent {
  render() {
    return (
      <div id="volunteering">
        <div className={title}>
          Volunteering
        </div>
        <div>
          {volunteering.map((el) => (
            <Volunteering
              title={el.title}
              date={el.date}
              text={el.text}
              symbol={el.symbol}
              link={el.link}
              key={el.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default VolunteeringList;
