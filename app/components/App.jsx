import Nav from 'components/Nav';
import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      slideIndex: 0
    };
  },

  handleNavigation(value) {
    return this.setState({ slideIndex: value });
  },

  render() {
    return <div>
      <Nav
        handleNavigation={this.handleNavigation}
        slideIndex={this.state.slideIndex}
      />

      {React.cloneElement(this.props.children, {
        handleNavigation: this.handleNavigation,
        slideIndex: this.state.slideIndex
      })}
    </div>;
  }
});

export default App;
