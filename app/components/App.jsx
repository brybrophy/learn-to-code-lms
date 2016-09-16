import Nav from 'components/Nav';
import React from 'react';
import { browserHistory } from 'react-router';

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: false,
      pages: {
        home: 0,
        html: 1,
        css: 2,
        javascript: 3,
        git: 4,
        about: 5
      },
      slideIndex: null
    };
  },

  handleLoginPage() {
    browserHistory.push('/login');
  },

  handleSlideIndex(value) {
    return this.setState({ slideIndex: value });
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
        handleSlideIndex: this.handleSlideIndex,
        loggedIn: this.state.loggedIn,
        pages: this.state.pages,
        slideIndex: this.state.slideIndex
      })}
    </div>;
  }
});

export default App;
