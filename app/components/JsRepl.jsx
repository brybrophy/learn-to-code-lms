import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/cobalt';
import 'brace/theme/textmate';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night_eighties';

const snippet = '"use strict";\n  function helloWorld() {\n  console.log("Hello world");\n}\n\nhelloWorld();';

const JsRepl = React.createClass({
  handleChange(newValue) {
    this.props.handleReplChange(newValue, this.props.replName);
  },

  render() {
    return <section>
      <AceEditor
        className="repl"
        editorProps={{$blockScrolling: true}}
        fontSize={16}
        maxLines={Infinity}
        minLines={6}
        mode="javascript"
        name={this.props.replName}
        onChange={this.handleChange}
        showPrintMargin={false}
        tabSize={2}
        theme={this.props.theme}
        value={snippet}
        width='60vw'
      />

    </section>
  }
});

export default JsRepl;
