/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles from '../Details.module.css';
import Volunteering from './Volunteering.jsx';
import volunteering from './volunteering.js';

class VolunteeringList extends PureComponent {
  render() {
    return (
      <div id="volunteeringSection">
        <div className={styles.title}>
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
              id={el.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default VolunteeringList;
