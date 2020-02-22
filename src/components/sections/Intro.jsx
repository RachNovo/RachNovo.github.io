import React, {Component} from 'react';
import styles, {main, text, editor} from './Intro.css';
import Editor from './Editor.jsx';

class Intro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={text}>
        </div>
        <div className={editor}>
          <Editor />
        </div>
      </div>
    )
  }
}

export default Intro;