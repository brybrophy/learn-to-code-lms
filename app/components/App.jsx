import Nav from 'components/Nav';
import React from 'react';
import { browserHistory } from 'react-router';

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: false,
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
        slideIndex={this.state.slideIndex}
      />

      {React.cloneElement(this.props.children, {
        handleLoginPage: this.handleLoginPage,
        handleSlideIndex: this.handleSlideIndex,
        loggedIn: this.state.loggedIn,
        slideIndex: this.state.slideIndex
      })}
    </div>;
  }
});

export default App;
