import React, {Component} from "react";
import AceEditor from "react-ace";
import message from './message.js';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue) {
    console.log('change', newValue);
  }
  render() {
    return (
      <AceEditor
        placeholder="Create something awesome! :P"
        mode="javascript"
        theme="xcode"
        name="blah2"
        onLoad={this.onLoad}
        onChange={this.onChange}
        fontSize={18}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={false}
        value={message}
        setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: false,
        tabSize: 2,
        }}
        />
    )
  }
}

export default Editor;