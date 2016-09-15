import Nav from 'components/Nav';
import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

const App = React.createClass({
  getInitialState() {
    return {
      slideIndex: 0
    };
  },

  handleSideNavigation(index) {
    return this.setState({ slideIndex: index });
  },

  render() {
    return <div>
      <Nav
        handleSideNavigation={this.handleSideNavigation}
        slideIndex={this.state.slideIndex}
      />

      {React.cloneElement(this.props.children, {
        handleSideNavigation: this.handleSideNavigation,
        slideIndex: this.state.slideIndex
      })}
    </div>
  }
});

export default App;
