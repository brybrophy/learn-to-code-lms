import Nav from 'components/Nav';
import React from 'react';
import { browserHistory } from 'react-router';

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: true,
      pages: {
        home: 0,
        html: 1,
        css: 2,
        javascript: 3,
        git: 4,
        about: 5
      },
      profileStatus: 1,
      slideIndex: null,
      snippets: {
        combineExersice: '// You can combine variables just like numbers in JavaScript. Below, declare\n// 2 strings as two different varibles. Then combine the 2 variables together.\n// See if you can figure this one out without an example.\n\n// HINT: You\'ll need to figure out how to add a space between the 2 variables.',

        helloWorld: '\'use strict\';\n\nfunction helloWorld() {\n  return \'Hello world\';\n}\n\nhelloWorld();',

        numberExersice: '// Numbers in javascript work just like numbers in\n\// the real world. Try doing some basic math below.\n\n// example: 1 + 1',

        stringExersice: '// In JavaScript, code written inside of quotes is called a string.\n// Type your name in quotes, then type a semi-colon.\n//\n// example: \'Bill Murray\';',

        varExersice: '// Variables are places where you can store pieces of code.\n// You declare a variable using the keyword, var.\n// Try storing a string in a variable.\n\n// example: var greeting = \'Hello World\';'
      },
      theme: 'tomorrow_night_eighties'
    };
  },

  handleLoginPage() {
    browserHistory.push('/login');

    this.setState({ slideIndex: null });
  },

  handleProfileStatus(value) {
    return this.setState({ profileStatus: value });
  },

  handleReplChange(newValue, replName) {
    const nextSnippet = JSON.stringify(newValue);

    const nextSnippets = Object.assign({}, this.state.snippets, {
      [replName]: newValue
    });

    this.setState({ snippets: nextSnippets });
  },

  handleSlideIndex(value) {
    return this.setState({ slideIndex: value });
  },

  handleThemeChange(value) {
    const newTheme = value.replace(/\s+/g, '_').toLowerCase();

    this.setState({ theme: newTheme });
  },

  render() {
    return <div>
      <Nav
        handleSlideIndex={this.handleSlideIndex}
        loggedIn={this.state.loggedIn}
        pages={this.state.pages}
        slideIndex={this.state.slideIndex}
      />

      {React.cloneElement(this.props.children, {
        handleLoginPage: this.handleLoginPage,
        handleProfileStatus: this.handleProfileStatus,
        handleReplChange: this.handleReplChange,
        handleSlideIndex: this.handleSlideIndex,
        handleThemeChange: this.handleThemeChange,
        loggedIn: this.state.loggedIn,
        pages: this.state.pages,
        profileStatus: this.state.profileStatus,
        slideIndex: this.state.slideIndex,
        snippets: this.state.snippets,
        theme: this.state.theme
      })}
    </div>;
  }
});

export default App;
