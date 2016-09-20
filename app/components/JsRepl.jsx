import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/cobalt';
import 'brace/theme/textmate';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night_eighties';

const access = {
  time_created :1474302898000,
  msg_mac: '9SbcGLPljIDM6+mc8sRqGDw8ZrJAfbMefMeX2NQCMY0='
};

const JsRepl = React.createClass({
  getInitialState() {
    return {
      repl: new ReplitClient('api.repl.it', '80', 'nodejs', access)
    }
  },

  componentWillMount() {
    this.state.repl.connect()
      .then(() => {

      })
      .catch((err) => {
        console.error(err);
      })
  },

  handleChange(newValue) {
    this.props.handleReplChange(newValue, this.props.replName);
  },

  startRepl() {
    const snippet = this.props.replName;

    this.state.repl.evaluate(this.props.snippets[snippet], {
      stdout: (str) => {
        console.log(str);
      }
    })
    .then((result) => {
      if (result.error) {
        console.error(result.error);
      }

      if (result.data === 'undefined') {
        const results = document.getElementById(this.props.resultName);

        return results.innerHTML += 'Result is UNDEFINED. Check the console.\n'
      }

      const results = document.getElementById(this.props.resultName);
        results.innerHTML += (result.error || result.data) + '\n';
    })
    .catch((err) => {
      console.error(err);
    });
  },

  clearResults() {
    document.getElementById(this.props.resultName).innerHTML = '';
  },

  render() {
    return <section>
      <AceEditor
        className="repl"
        editorProps={{$blockScrolling: true}}
        fontSize={16}
        maxLines={Infinity}
        minLines={this.props.minLines}
        mode="javascript"
        name={this.props.replName}
        onChange={this.handleChange}
        showPrintMargin={false}
        tabSize={2}
        theme={this.props.theme}
        value={this.props.initialValue}
        width='100%'
      />

      <a
        className="replBtn"
        id="run"
        onTouchTap={this.startRepl}
      >
        run
      </a>

      <a
        className="replBtn"
        id="clear"
        onTouchTap={this.clearResults}
      >
        clear
      </a>

      <p>result:</p>
      <div className="output">
        <code className="result" id={this.props.resultName}></code>
      </div>

    </section>
  }
});

export default JsRepl;
