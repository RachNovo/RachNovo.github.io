/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles, { title, skillMain, subTitle } from '../Details.css';
import Skill from './Skill.jsx';
import skills from './skills.js';

class SkillList extends PureComponent {
  render() {
    const categories = ['Front End', 'Back End', 'Tools', 'Other'];

    // filters the skills by category and saves them in arrays
    const [frontEnd, backEnd, tools, other] = categories.map(
      (category) => skills.filter((el) => el.category === category),
    );
    return (
      <div id="skills">
        <div className={title}>
          My Skills
        </div>
        {/* For each array, the category is produced with the list of skills */}
        <div className={skillMain}>
          {[frontEnd, backEnd, tools, other].map((category, i) => (
            <div key={categories[i]}>
              <div className={subTitle}>
                {categories[i]}
              </div>
              {category.map((el) => (
                <Skill
                  name={el.name}
                  level={el.level}
                  popUp={el.popUp}
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

export default SkillList;
