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
      slideIndex: null,
      snippets: {},
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

    if (cookie.load('userId')) {
      axios.get(`/api/users/${cookie.load('userId')}`)
      .then((res) => {
        this.setState({ avatarUrl: res.data.providerAvatar});
      })
      .catch((err) => {
        console.error(err);
      });
    }

    const getEvents = function() {
      return axios.get('/auth/meetup/events');
    };

    const getSnippets = function() {
      return axios.get(`/api/snippets/${cookie.load('userId')}`);
    };

    axios.all([getEvents(), getSnippets()])
      .then(axios.spread((events, snippets) => {
        this.setState({ events: events.data, snippets:  snippets.data });
      }))
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
        events: this.state.events,
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
