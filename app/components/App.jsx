import Nav from 'components/Nav';
import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

const App = React.createClass({
  getInitialState() {
    return {
      avatarUrl: '',
      loggedIn: cookie.load('loggedIn'),
      pages: {
        home: 0,
        html: 1,
        css: 2,
        javascript: 3,
        git: 4,
        about: 5
      },
      slideIndex: null,
      snippets: {
        helloWorld: '\'use strict\';\n\nfunction helloWorld() {\n  return \'Hello world\';\n}\n\nhelloWorld();',

        functionJs: '// Functions are a way of telling JavaScript to perform one or many actions.\n// Write a simple function that divides a number by 2.\n\n// example: function divideByTwo() {\n// return [Your Code Here]\n\n// divideByTwo()}',

        functionJsTwo: '// Functions are most useful when we pass arguments into them. Once you create a\n// function, you pass in arguments through it\'s parameters and it produces an output.\n// Given the same arguments again, the function will always return the same output.\n// Write a function that takes in two numbers and multiplies them.\n\n// example: function multiply([PARAMETER 1], [PARAMETER 2]) {\n//   return [Your Code Here]\n// }\n\n// multiply([ARGUMENT 1], [ARGUMENT 2])',

        numberJs: '// Numbers in javascript work just like numbers in\n\// the real world. Try doing some basic math below.\n\n// example: 1 + 1',

        stringJs: '// In JavaScript, code written inside of quotes is called a string.\n// Type your name in quotes, then type a semi-colon.\n//\n// example: \'Bill Murray\';',

        varJs: '// Variables are places where you can store pieces of code.\n// You declare a variable using the keyword, var.\n// Try storing a string in a variable.\n\n// example: var greeting = \'Hello World\';\n\n// greeting;'
      },
      theme: 'tomorrow_night_eighties'
    };
  },

  componentWillMount() {
    const lesson = cookie.load('lessonIndex');
    const pages = this.state.pages;

    for (const page in pages) {
      if (lesson === pages[page]) {
        browserHistory.push(`/${page}`);
      }
    }

    cookie.remove('lessonIndex');

    axios.get(`/api/users/${cookie.load('userId')}`)
      .then((res) => {
        this.setState({ avatarUrl: res.data.providerAvatar});
      })
      .catch((err) => {
        console.error(err);
      });
  },

  handleLessonIndex(index) {
    this.setState({ lessonIndex: index });
  },

  handleLoginPage() {
    browserHistory.push('/login');

    this.setState({ slideIndex: null });
  },

  handleLoginState(boolean) {
    if (!boolean) {
      return this.setState({ avatarUrl: '', loggedIn: boolean });
    }

    this.setState({ loggedIn: boolean });
  },

  handleReplChange(newValue, replName) {
    const nextSnippet = JSON.stringify(newValue);

    const nextSnippets = Object.assign({}, this.state.snippets, {
      [replName]: newValue
    });

    this.setState({ snippets: nextSnippets });
  },

  handleSlideIndex(value) {
    this.setState({ slideIndex: value });
  },

  handleThemeChange(value) {
    const newTheme = value.replace(/\s+/g, '_').toLowerCase();

    this.setState({ theme: newTheme });
  },

  render() {
    return <div>
      <Nav
        avatarUrl={this.state.avatarUrl}
        handleSlideIndex={this.handleSlideIndex}
        loggedIn={this.state.loggedIn}
        pages={this.state.pages}
        slideIndex={this.state.slideIndex}
      />

      {React.cloneElement(this.props.children, {
        handleLessonIndex: this.handleLessonIndex,
        handleLoginPage: this.handleLoginPage,
        handleLoginState: this.handleLoginState,
        handleReplChange: this.handleReplChange,
        handleSlideIndex: this.handleSlideIndex,
        handleThemeChange: this.handleThemeChange,
        lessonIndex: this.state.lessonIndex,
        loggedIn: this.state.loggedIn,
        pages: this.state.pages,
        slideIndex: this.state.slideIndex,
        snippets: this.state.snippets,
        theme: this.state.theme
      })}
    </div>;
  }
});

export default App;
