import Nav from './common/Nav';
import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import cookie from 'react-cookie';

import {
  getEvents,
  trackSlideIndex
} from '../actions/appActions';

@inject('appStore')
@observer
class App extends React.Component {
  componentWillMount() {
    const lesson = cookie.load('lessonIndex');
    const pages = this.props.appStore.pages;

    for (const page in pages) {
      if (lesson === pages[page]) {
        browserHistory.push(`/${page}`);
      }
    }

    cookie.remove('lessonIndex');

    if (cookie.load('userId')) {
      axios.get(`/api/users/${cookie.load('userId')}`)
      .then((res) => {
        // this.setState({
        //   avatarUrl: res.data.providerAvatar,
        //   replitAccess: {
        //     replitHash: res.data.replitHash,
        //     replitTime: res.data.replitTime
        //   }
        // });
      })
      .catch((err) => {
        console.error(err);
      });

      getEvents();
    }

    axios.get('/auth/meetup/events')
    .then((res) => {
      // this.setState({ events: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  handleCreateRepl() {
    return new ReplitClient('api.repl.it', '80', 'nodejs', {
      time_created: this.props.appStore.replitAccess.replitTime,
      msg_mac: this.props.appStore.replitAccess.replitHash
    });
  }

  handleLessonIndex(index) {
    // this.setState({ lessonIndex: index });
  }

  handleLoginPage() {
    browserHistory.push('/login');

    // this.setState({ slideIndex: null });
  }

  handleLoginState(boolean) {
    if (!boolean) {
      return this.setState({ avatarUrl: '', loggedIn: boolean });
    }

    // this.setState({ loggedIn: boolean });
  }

  handleReplChange(newValue, replName, timeout) {
    const oldSnippet = this.props.appStore.snippets[replName];

    const nextSnippet = Object.assign({}, oldSnippet, {
      snippet: newValue
    });

    const nextSnippets = Object.assign({}, this.props.appStore.snippets, {
      [replName]: nextSnippet
    });

    // this.setState({ snippets: nextSnippets, timeout });
  }

  handleRequestClose() {
    // this.setState({ snackbar: false });
  }

  handleSaveSnippets() {
    axios.patch(`/api/snippets/${cookie.load('userId')}`, this.props.appStore.snippets)
      .then((res) => {
        if (res.data === 'Save Successful') {
          // this.setState({ snackbar: true });
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleSlideIndex(value) {
    trackSlideIndex(value)
  }

  handleThemeChange(value) {
    const newTheme = value.replace(/\s+/g, '_').toLowerCase();

    // this.setState({ theme: newTheme });
  }

  render() {
    return <div>
      <Nav
        avatarUrl={this.props.appStore.avatarUrl}
        handleSlideIndex={this.handleSlideIndex}
        loggedIn={this.props.appStore.loggedIn}
        pages={this.props.appStore.pages}
        slideIndex={this.props.appStore.slideIndex}
      />

      {React.cloneElement(this.props.children, {
        events: this.props.appStore.events,
        handleCreateRepl: this.handleCreateRepl,
        handleLessonIndex: this.handleLessonIndex,
        handleLoginPage: this.handleLoginPage,
        handleLoginState: this.handleLoginState,
        handleReplChange: this.handleReplChange,
        handleRequestClose: this.handleRequestClose,
        handleSaveSnippets: this.handleSaveSnippets,
        handleSlideIndex: this.handleSlideIndex,
        handleThemeChange: this.handleThemeChange,
        lessonIndex: this.props.appStore.lessonIndex,
        loggedIn: this.props.appStore.loggedIn,
        pages: this.props.appStore.pages,
        replitAccess: this.props.appStore.replitAccess,
        slideIndex: this.props.appStore.slideIndex,
        snackbar: this.props.appStore.snackbar,
        snippets: this.props.appStore.snippets,
        theme: this.props.appStore.theme,
        timeout: this.props.appStore.timeout
      })}
    </div>;
  }
};

export default App;
