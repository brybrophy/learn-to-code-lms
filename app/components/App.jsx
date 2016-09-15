import Nav from 'components/Nav';
import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

const App = React.createClass({
  getInitialState() {
    return {
      slideIndex: 0
    };
  },

  handleNavigation(index) {
    return this.setState({ slideIndex: index });
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
    </div>
  }
});

export default App;
