import React, {Component} from 'react';
import styles, {main, title, text, subTitle} from '../../Details.css';
import Skill from './Skill.jsx';
import skills from './skills.js';

class SkillList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const categories = ['Front End', 'Back End', 'Tools', 'Other'];

    // filters the skills by category and saves them in arrays
    const [frontEnd, backEnd, tools, other] = categories.map(category => skills.filter(el => el.category === category));

    return (
      <div className={main}>
        {/* For each array, the category is produced with the list of skills */}
        {[frontEnd, backEnd, tools, other].map((category, i) => {
          return (
            <div>
              <div className={subTitle}>
              {categories[i]}
              </div>
              {category.map((el, i) => <Skill name={el.name} level=  {el.level} key={i}/>)}
            </div>
          )
        })}
      </div>
    )
  }
}

export default SkillList;