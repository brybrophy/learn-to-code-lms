import Nav from 'components/Nav';
import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

const App = React.createClass({
  getInitialState() {
    return {
      avatarUrl: '',
      events: [],
      loggedIn: cookie.load('loggedIn'),
      pages: {
        home: 0,
        html: 1,
        css: 2,
        javascript: 3,
        git: 4,
        about: 5
      },
      replitAccess: {
        replitHash: '',
        replitTime: ''
      },
      slideIndex: null,
      snackbar: false,
      snippets: {
        helloWorld: {},
        functionJs: {},
        functionJsTwo: {},
        numberJs: {},
        stringsJs: {},
        varJs: {},
        conditionalConsole: {}
      },
      theme: 'tomorrow_night_eighties',
      timeout: null
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
        const nextSnippets = Object.assign(this.state.snippets, res.data);

        return this.setState({ snippets: nextSnippets });
      })
      .catch((err) => {
        console.error(err);
      });
    }

    axios.get('/auth/meetup/events')
    .then((res) => {
      return this.setState({ events: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
  },

  handleCreateRepl() {
    return new ReplitClient('api.repl.it', '80', 'nodejs', {
      time_created: this.state.replitAccess.replitTime,
      msg_mac: this.state.replitAccess.replitHash
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

  handleReplChange(newValue, replName, timeout) {
    const oldSnippet = this.state.snippets[replName];

    const nextSnippet = Object.assign({}, oldSnippet, {
      snippet: newValue
    });

    const nextSnippets = Object.assign({}, this.state.snippets, {
      [replName]: nextSnippet
    });

    this.setState({ snippets: nextSnippets, timeout });
  },

  handleRequestClose() {
    this.setState({ snackbar: false });
  },

  handleSaveSnippets() {
    axios.put(`/api/snippets/${cookie.load('userId')}`, this.state.snippets)
      .then((res) => {
        console.log(res.data.snippets);
        if (res.data.message === 'Save Successful') {
          this.setState({ snackbar: true });
        }
      })
      .catch((err) => {
        console.error(err);
      })
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
});

export default App;
