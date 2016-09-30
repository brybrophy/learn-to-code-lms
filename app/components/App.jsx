import Nav from 'components/Nav';
import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import cookie from 'react-cookie';

@inject('appStore')
@observer
class App extends React.Component {
  // getInitialState() {
  //   return {
  //     avatarUrl: '',
  //     events: [],
  //     loggedIn: cookie.load('loggedIn'),
  //     pages: {
  //       home: 0,
  //       html: 1,
  //       css: 2,
  //       javascript: 3,
  //       git: 4,
  //       about: 5
  //     },
  //     replitAccess: {
  //       replitHash: '',
  //       replitTime: ''
  //     },
  //     slideIndex: null,
  //     snackbar: false,
  //     snippets: {
  //       helloWorld: {
  //         snippet: '\'use strict\';\n\nfunction helloWorld() {\n  return \'Hello world\';\n}\n\nhelloWorld();',
  //         snippetType: 'javascript',
  //         lessonName: 'javascript'
  //       },
  //       functionJs: {
  //         snippet: '// Functions are a way of telling JavaScript to perform one or many actions.\n// Write a simple function that divides a number by 2.\n\n// example: function divideByTwo() {\n// return [Your Code Here]\n\n// divideByTwo()}',
  //         snippetType: 'comment',
  //         lessonName: 'javascript'
  //       },
  //       functionJsTwo: {
  //         snippet: '// Functions are a way of telling JavaScript to perform one or many actions.\n// Write a simple function that divides a number by 2.\n\n// example: function divideByTwo() {\n// return [Your Code Here]\n\n// divideByTwo()}',
  //         snippetType: 'comment',
  //         lessonName: 'javascript'
  //       },
  //       numberJs: {
  //         snippet: '// Numbers in javascript work just like numbers in\n\// the real world. Try doing some basic math below.\n\n// example: 1 + 1',
  //         snippetType: 'comment',
  //         lessonName: 'javascript'
  //       },
  //       stringsJs: {
  //         snippet: '// In JavaScript, code written inside of quotes is called a string.\n// Type your name in quotes, then type a semi-colon.\n//\n// example: \'Bill Murray\';',
  //         snippetType: 'comment',
  //         lessonName: 'javascript'
  //       },
  //       varJs: {
  //         snippet: '// Variables are places where you can store pieces of code.\n// You declare a variable using the keyword, var.\n// Try storing a string in a variable.\n\n// example: var greeting = \'Hello World\';\n\n// greeting;',
  //         snippetType: 'comment',
  //         lessonName: 'javascript'
  //       }
  //     },
  //     theme: 'tomorrow_night_eighties',
  //     timeout: null
  //   };
  // }

  componentWillMount() {
    console.log(this.props);
    const lesson = cookie.load('lessonIndex');
    const pages = this.state.pages;

    for (const page in pages) {
      if (lesson === pages[page]) {
        browserHistory.push(`/${page}`);
      }
    }

    cookie.remove('lessonIndex');

    if (cookie.load('userId')) {
      axios.get(`/api/users/${cookie.load('userId')}`)
      .then((res) => {
        this.setState({
          avatarUrl: res.data.providerAvatar,
          replitAccess: {
            replitHash: res.data.replitHash,
            replitTime: res.data.replitTime
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });

      axios.get(`/api/snippets/${cookie.load('userId')}`)
      .then((res) => {
        this.setState({ snippets: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
    }

    axios.get('/auth/meetup/events')
    .then((res) => {
      this.setState({ events: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  handleCreateRepl() {
    return new ReplitClient('api.repl.it', '80', 'nodejs', {
      time_created: this.state.replitAccess.replitTime,
      msg_mac: this.state.replitAccess.replitHash
    });
  }

  handleLessonIndex(index) {
    this.setState({ lessonIndex: index });
  }

  handleLoginPage() {
    browserHistory.push('/login');

    this.setState({ slideIndex: null });
  }

  handleLoginState(boolean) {
    if (!boolean) {
      return this.setState({ avatarUrl: '', loggedIn: boolean });
    }

    this.setState({ loggedIn: boolean });
  }

  handleReplChange(newValue, replName, timeout) {
    const oldSnippet = this.state.snippets[replName];

    const nextSnippet = Object.assign({}, oldSnippet, {
      snippet: newValue
    });

    const nextSnippets = Object.assign({}, this.state.snippets, {
      [replName]: nextSnippet
    });

    this.setState({ snippets: nextSnippets, timeout });
  }

  handleRequestClose() {
    this.setState({ snackbar: false });
  }

  handleSaveSnippets() {
    axios.patch(`/api/snippets/${cookie.load('userId')}`, this.state.snippets)
      .then((res) => {
        if (res.data === 'Save Successful') {
          this.setState({ snackbar: true });
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleSlideIndex(value) {
    this.setState({ slideIndex: value });
  }

  handleThemeChange(value) {
    const newTheme = value.replace(/\s+/g, '_').toLowerCase();

    this.setState({ theme: newTheme });
  }

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
        events: this.state.events,
        handleCreateRepl: this.handleCreateRepl,
        handleLessonIndex: this.handleLessonIndex,
        handleLoginPage: this.handleLoginPage,
        handleLoginState: this.handleLoginState,
        handleReplChange: this.handleReplChange,
        handleRequestClose: this.handleRequestClose,
        handleSaveSnippets: this.handleSaveSnippets,
        handleSlideIndex: this.handleSlideIndex,
        handleThemeChange: this.handleThemeChange,
        lessonIndex: this.state.lessonIndex,
        loggedIn: this.state.loggedIn,
        pages: this.state.pages,
        replitAccess: this.state.replitAccess,
        slideIndex: this.state.slideIndex,
        snackbar: this.state.snackbar,
        snippets: this.state.snippets,
        theme: this.state.theme,
        timeout: this.state.timeout
      })}
    </div>;
  }
};

export default App;
