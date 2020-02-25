import React, {Component} from 'react';
import styles, {main, title, text, subTitle} from '../../Details.css';
import Skill from './Skill.jsx';

class SkillList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {skills} = this.props;

    // filtering all the skills by category
    const frontEnd = skills.filter(el => el.category === 'FrontEnd');
    const backEnd = skills.filter(el => el.category === 'BackEnd');
    const tools = skills.filter(el => el.category === 'Tools');
    const other = skills.filter(el => el.category === 'Other');

    return (
      <div className={main}>
        <div className={title}>My Skills</div>
        <div className={subTitle}>
          Front End
        </div>
        {frontEnd.map((el, i) => <Skill name={el.name} level={el.level} key={i}/>)}
        <div className={subTitle}>
          Back End
        </div>
        {backEnd.map((el, i) => <Skill name={el.name} level={el.level} key={i}/>)}
        <div className={subTitle}>
          Tools
        </div>
        {tools.map((el, i) => <Skill name={el.name} level={el.level} key={i}/>)}
        <div className={subTitle}>
          Other
        </div>
        {other.map((el, i) => <Skill name={el.name} level={el.level} key={i}/>)}
      </div>
    )
  }
}

export default SkillList;