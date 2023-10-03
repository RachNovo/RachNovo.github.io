/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles from '../Details.module.css';
import Tools from './Tools.jsx';
import toolsList from './tools.js';

class ToolsList extends PureComponent {
  render() {
    const categories = ['Front-End', 'Back-End', 'Testing', 'Collaboration', 'Other'];

    // filters the tools by category and saves them in arrays
    const [frontEnd, backEnd, testing, collaboration, other] = categories.map(
      (category) => toolsList.filter((el) => el.category === category)
    );
    return (
      <div id="toolsSection">
        <div className={styles.title}>
          My Tools
        </div>
        <span className={styles.toolHover}>
          (Hover over the tech to learn more)
        </span>
        {/* For each array, the category is produced with the list of tools */}
        <div className={styles.toolMain}>
          {[frontEnd, backEnd, testing, collaboration, other].map((category, i) => (
            <div key={categories[i]}>
              <div className={styles.subTitle}>
                {categories[i]}
              </div>
              {category.map((el) => (
                <Tools
                  name={el.name}
                  level={el.level}
                  toolTip={el.toolTip}
                  key={el.id}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ToolsList;
